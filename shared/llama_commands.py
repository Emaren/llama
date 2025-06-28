COMMAND_MAP = {
    "edit_code": "backend.llama_edit.process_edit_cycle",
    "plan_code": "backend.code_planner.plan_code_edits",
    "write_code": "backend.code_writer.write_code_files",
    "reflect": "backend.reflection.self_reflector.reflect_on_interaction",
    "listen": "backend.prompt_listener.listen_for_prompts"
}

def get_command_handler(command_name: str):
    return COMMAND_MAP.get(command_name)
