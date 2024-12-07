import pathlib


def full_path() -> str:
    return str(pathlib.Path(__file__).parent.resolve()).replace('\\', '/').replace("/tools", "")
