import os, shutil


def foreplay() -> str:
    """Foreplay before the good shit, (app initialization):
        1. Create db if not existing
        2. Clear pycache to avoid bugs
    """
    pycache_path = os.path.join(os.getcwd(), "backend/__pycache__")
    if os.path.exists(pycache_path):
        shutil.rmtree(pycache_path)

    return f"[I-11]]"


def log(msg: str, code: int = 0) -> None:
    """Print stuff with proper formatting
       0 -> OK
       1 -> INFO
       2 -> WARN
       3 -> FAIL    
    """
    labels = {0: (" OK ", 32), 1: ("INFO", 34), 2: ("WARN", 33), 3: ("FAIL", 31)}
    tag, color = labels.get(code, ("???? ", 37))
    print(f"\033[37m[\033[0m \033[{color}m{tag}\033[0m \033[37m] {msg}\033[0m")