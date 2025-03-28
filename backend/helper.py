import os, shutil


def foreplay() -> str:
    """Foreplay before the good shit, (app initialization):
        1. Create db if not existing
        2. Clear pycache to avoid bugs
    """
    filepath = "db/.csv"
    folder = os.path.dirname(filepath)

    out = "I-"

    if not os.path.exists(folder):
        os.makedirs(folder)
        out += "2"
    else:
        out += "1"

    if not os.path.exists(filepath):
        with open(filepath, "w") as file:
            file.write("C\n")
        out += "2"
    else:
        out += "1"

    pycache_path = os.path.join(os.getcwd(), "backend/__pycache__")
    if os.path.exists(pycache_path):
        shutil.rmtree(pycache_path)

    return out

