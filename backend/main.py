from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# import from routes/ directly (no "backend." prefix)
from routes.system_vitals      import router as system_vitals_router
from routes.context_tokens     import router as context_router
from routes.stats_system       import router as stats_system_router
from routes.stats_llm          import router as stats_llm_router
from routes.agents_health      import router as agents_health_router
from routes.agent_events       import router as agent_events_router
from routes.stats_system_extra import router as stats_system_extra_router
from routes.stats_ops          import router as stats_ops_router
from routes.stats_data         import router as stats_data_router
from routes.ws_agent_events    import router as ws_agent_events_router

app = FastAPI(
    title="Llama Dashboard API",
    version="0.1.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# 1) OPEN CORS (must come BEFORE include_router calls)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_origin_regex=".*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2) REGISTER REST ROUTERS
app.include_router(system_vitals_router,      prefix="/api/system-vitals",      tags=["system-vitals"])
app.include_router(context_router,            prefix="/api/context",            tags=["context"])
app.include_router(stats_system_router,       prefix="/api/stats/system",       tags=["stats"])
app.include_router(stats_llm_router,          prefix="/api/stats/llm",          tags=["stats"])
app.include_router(agents_health_router,      prefix="/api/agents/health",      tags=["agents"])
app.include_router(agent_events_router,       prefix="/api/agents/events",      tags=["agents"])
app.include_router(stats_system_extra_router, prefix="/api/stats/system-extra", tags=["stats"])
app.include_router(stats_ops_router,          prefix="/api/stats/ops",          tags=["stats"])
app.include_router(stats_data_router,         prefix="/api/stats/data",         tags=["stats"])

# 3) REGISTER WS ROUTER (its prefix is in ws_agent_events.py)
app.include_router(ws_agent_events_router)
