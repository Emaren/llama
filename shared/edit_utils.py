import os

def read_file(path: str) -> str:
    try:
        with open(path, 'r') as f:
            return f.read()
    except FileNotFoundError:
        return ''

def write_file(path: str, content: str) -> bool:
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Write failed: {e}")
        return False

def compare_files(path1: str, path2: str) -> bool:
    return read_file(path1) == read_file(path2)
