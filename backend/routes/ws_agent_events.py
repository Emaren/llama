# backend/routes/ws_agent_events.py

from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from datetime import datetime
import asyncio
import json

router = APIRouter()

# Store connected clients
connected_clients = set()

@router.websocket("/logs/agent-events")
async def agent_events(websocket: WebSocket):
    await websocket.accept()
    connected_clients.add(websocket)
    try:
        while True:
            await asyncio.sleep(3)  # Simulate periodic agent logs
            event = {
                "agent": "GoalOptimizer",
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "message": "Reprioritized tasks based on engagement."
            }
            # Broadcast to all connected clients
            disconnected = []
            for client in connected_clients:
                try:
                    await client.send_text(json.dumps(event))
                except WebSocketDisconnect:
                    disconnected.append(client)
            # Clean up disconnected clients
            for dc in disconnected:
                connected_clients.remove(dc)
    except WebSocketDisconnect:
        connected_clients.remove(websocket)
