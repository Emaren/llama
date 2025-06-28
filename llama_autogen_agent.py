# llama_autogen_agent.py

import time
from pathlib import Path
import openai

MODEL = "gpt-4o"  # or "gpt-4-1106-preview"

NEXT_FILE_PROMPT = """
Only output a complete and valid `cat > relative/path/to/file <<EOF ... EOF` shell command for the next file needed to reach level 11 of this repo.
Only use relative paths inside these folders: backend/, data/, shared/, frontend/.
Do not use absolute paths, placeholder names, markdown, or explanations.
Just the raw shell command.
"""

ALLOWED_PREFIXES = ("backend/", "data/", "shared/", "frontend/")
seen_files = set()

client = openai.OpenAI()  # uses OPENAI_API_KEY from env var

def ask_llama(prompt):
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "You are a file-generating agent."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2,
    )
    return response.choices[0].message.content.strip()

def write_file_from_cat(output):
    print("----- RAW OUTPUT START -----")
    print(output)
    print("----- RAW OUTPUT END -----\n")

    output = output.strip()
    if output.startswith("```"):
        output = "\n".join(output.splitlines()[1:-1])  # Remove ```sh wrapper

    lines = output.strip().splitlines()
    if not lines or not lines[0].startswith("cat >"):
        print("[!] No valid cat command found.")
        return

    try:
        file_path = lines[0].split(">")[1].split("<<")[0].strip()

        if (
            file_path.startswith("/") or
            file_path.startswith("http") or
            " " in file_path or
            file_path == "path/to/file" or
            not file_path.startswith(ALLOWED_PREFIXES)
        ):
            print(f"[!] Skipping unsupported path: {file_path}")
            return

        if file_path in seen_files:
            print(f"[!] Skipping duplicate: {file_path}")
            return
        seen_files.add(file_path)

        eof_token = lines[0].split("<<")[1].strip()
        content = []
        for line in lines[1:]:
            if line.strip() == eof_token or line.strip().startswith(eof_token):
                break
            content.append(line)

        path = Path(file_path)
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "w") as f:
            f.write("\n".join(content) + "\n")
        print(f"[✓] Wrote {file_path}")
    except Exception as e:
        print(f"[ERROR] Failed to parse/write: {e}")

def main():
    while True:
        print("⚙️ Generating next file...")
        response = ask_llama(NEXT_FILE_PROMPT)
        print("🧠 Model Response:\n", response)
        write_file_from_cat(response)
        time.sleep(2)

if __name__ == "__main__":
    main()

