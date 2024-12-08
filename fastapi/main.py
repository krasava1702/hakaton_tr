import asyncio
import uvicorn
from dotenv import dotenv_values
from fastapi import FastAPI
from contextlib import asynccontextmanager

from tools.get_full_path import full_path
from utils.mini_local_memory import LocalMemory
import aiomysql

from routers import citizen_reports


@asynccontextmanager
async def lifespan(app: FastAPI):
    env_data = dotenv_values(f"{full_path()}/.env")
    LocalMemory().set("env_data", env_data)
    conn = await aiomysql.connect(
        host="localhost",
        port=3306,
        user=env_data["DB_USER"],
        password=env_data["DB_PASSWORD"],
        db="hackathon"
    )
    cur = await conn.cursor()

    LocalMemory().set("cur", cur)
    LocalMemory().set("conn", conn)
    yield
    await LocalMemory().get("cur").close()
    LocalMemory().get("conn").close()

app = FastAPI(lifespan=lifespan)
app.include_router(citizen_reports.router)

@app.get("/")
def root():
    return {"message": "Traffic Management Admin API is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)