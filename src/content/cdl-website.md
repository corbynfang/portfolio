# CDL Website

A comprehensive statistics platform for the **Call of Duty League** featuring player analytics, team rosters, and interactive data visualizations.

## Overview

This platform provides in-depth statistics and analytics for Call of Duty League fans and analysts. It aggregates player performance data, team standings, match results, and presents them through an intuitive web interface.

## Features

- **Player Statistics**: Detailed K/D ratios, damage per round, and performance metrics
- **Team Analytics**: Win rates, tournament results, and roster information
- **Match History**: Complete records of matches with play-by-play data
- **Interactive Dashboards**: Visual charts and graphs for data analysis
- **Real-time Updates**: Live match tracking and score updates

## Tech Stack

### Frontend
- **React** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript for better code quality
- **Tailwind CSS** - Utility-first styling for responsive design
- **Vite** - Fast build tool and development server
- **Chart.js** - Interactive data visualizations

### Backend
- **Go** - High-performance backend API
- **PostgreSQL** - Relational database for player and match data
- **REST API** - Clean endpoints for data fetching

## Architecture

### Data Flow

```
User → React Frontend → Go API → PostgreSQL → Data Response
```

### Example API Endpoint

```go
package main

import (
    "database/sql"
    "encoding/json"
    "net/http"
    
    "github.com/gorilla/mux"
    _ "github.com/lib/pq"
)

type Player struct {
    ID          int     `json:"id"`
    Name        string  `json:"name"`
    Team        string  `json:"team"`
    KDRatio     float64 `json:"kd_ratio"`
    DamagePerRd float64 `json:"damage_per_round"`
}

func getPlayerStats(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    playerID := vars["id"]
    
    var player Player
    err := db.QueryRow(
        "SELECT id, name, team, kd_ratio, damage_per_round FROM players WHERE id = $1",
        playerID,
    ).Scan(&player.ID, &player.Name, &player.Team, &player.KDRatio, &player.DamagePerRd)
    
    if err != nil {
        http.Error(w, "Player not found", http.StatusNotFound)
        return
    }
    
    json.NewEncoder(w).Encode(player)
}
```

### Frontend Component Example

```typescript
import React, { useEffect, useState } from 'react';

interface PlayerStats {
  id: number;
  name: string;
  team: string;
  kd_ratio: number;
  damage_per_round: number;
}

const PlayerCard: React.FC<{ playerId: number }> = ({ playerId }) => {
  const [player, setPlayer] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/players/${playerId}`)
      .then(res => res.json())
      .then(data => {
        setPlayer(data);
        setLoading(false);
      });
  }, [playerId]);

  if (loading) return <div>Loading...</div>;
  if (!player) return <div>Player not found</div>;

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold">{player.name}</h2>
      <p className="text-gray-400">{player.team}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">K/D Ratio</p>
          <p className="text-xl font-semibold">{player.kd_ratio.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Damage/Round</p>
          <p className="text-xl font-semibold">{player.damage_per_round.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};
```

## Database Schema

```sql
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team VARCHAR(100) NOT NULL,
    kd_ratio DECIMAL(4,2),
    damage_per_round DECIMAL(5,1),
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    team1_id INTEGER REFERENCES teams(id),
    team2_id INTEGER REFERENCES teams(id),
    team1_score INTEGER,
    team2_score INTEGER,
    match_date TIMESTAMP,
    tournament VARCHAR(100)
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    region VARCHAR(50),
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0
);
```

## Key Features Implementation

### Real-time Statistics Dashboard

The dashboard updates live during matches using WebSocket connections:

```typescript
const socket = new WebSocket('ws://localhost:8080/ws');

socket.onmessage = (event) => {
  const update = JSON.parse(event.data);
  updatePlayerStats(update);
};
```

### Performance Optimization

- **Lazy Loading**: Load player data only when needed
- **Caching**: Cache frequently accessed statistics
- **Pagination**: Limit database queries with pagination
- **Indexes**: Optimize database queries with proper indexing

## What I Learned

This project taught me:

1. **Full-Stack Development** - Building both frontend and backend systems
2. **TypeScript** - Type safety in large React applications
3. **Go Backend Development** - Building performant REST APIs
4. **PostgreSQL** - Database design and query optimization
5. **Data Visualization** - Creating meaningful charts and graphs
6. **Responsive Design** - Mobile-first UI development with Tailwind

## Challenges Overcome

- **Data Consistency**: Ensuring stats stay accurate across updates
- **Performance**: Handling large datasets efficiently
- **Real-time Updates**: Implementing live score tracking
- **API Design**: Creating intuitive and RESTful endpoints
- **TypeScript Migration**: Converting from JavaScript to TypeScript

## Future Enhancements

- [ ] Add player comparison tool
- [ ] Implement advanced analytics (heat maps, play patterns)
- [ ] Create mobile app version
- [ ] Add user authentication for favorites/watchlists
- [ ] Integrate with official CDL API for live data

## Links

- [GitHub Repository](https://github.com/corbynfang/CDL-Website)
- [React Documentation](https://react.dev/)
- [Go Documentation](https://go.dev/doc/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

> Building this platform deepened my appreciation for both esports analytics and modern web development!
