"""Dispatch tasks to active LLaMA modules (e.g. summarizer, classifier)."""
def dispatch_module(module: str, data: dict) -> str:
    return f"Dispatched to {module} with data: {data}"
