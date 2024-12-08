import json

import aiomysql
from fastapi import APIRouter, Depends

from utils.mini_local_memory import LocalMemory

router = APIRouter(
    prefix="/citizen_reports",
    tags=["citizen_reports"],
)

@router.get("/get")
async def citizen_reports():
    conn: aiomysql.Connection = LocalMemory().get("conn")
    cur: aiomysql.Cursor = LocalMemory().get("cur")

    await cur.execute("SELECT * FROM citizen_reports")
    data = await cur.fetchall()
    await conn.commit()
    # print(data)
    return json.dumps(data)
