import time
from backend.reflection.self_reflector import reflect_on_interaction
from backend.code_planner import plan_code_edits
from backend.code_writer import write_code_files

def run_agent_loop():
    """
    Main autonomous agent loop: listen, plan, reflect, act.
    """
    while True:
        print("🧠 Agent loop iteration starting...")
        # Simulate listening for new tasks or prompts (placeholder)
        prompt = "Simulated prompt input..."

        plan = plan_code_edits(prompt)
        success, notes = write_code_files(plan)

        reflection = reflect_on_interaction(success, notes)
        print(f"Reflection: {reflection}")

        time.sleep(5)  # Wait before next cycle
