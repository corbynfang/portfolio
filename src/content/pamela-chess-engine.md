# Pamela Chess Engine

A neural network-based chess engine built with **PyTorch** for machine learning practice and experimentation.

## Overview

Pamela is a chess engine that uses deep learning to evaluate board positions and suggest moves. Unlike traditional chess engines that rely on handcrafted evaluation functions, Pamela learns to play chess through neural networks.

## Features

- **Neural Network Evaluation**: Deep learning-based position evaluation
- **Self-Play Training**: The engine improves by playing against itself
- **PyTorch Implementation**: Built using modern deep learning frameworks
- **Board Representation**: Efficient encoding of chess positions for neural networks

## Tech Stack

- **Python** - Core programming language
- **PyTorch** - Deep learning framework for neural network training
- **NumPy** - Numerical computations and array operations
- **python-chess** - Chess move generation and board representation

## Architecture

The engine uses a convolutional neural network to evaluate board positions:

```python
import torch
import torch.nn as nn

class ChessNet(nn.Module):
    def __init__(self):
        super(ChessNet, self).__init__()
        # Convolutional layers for spatial features
        self.conv1 = nn.Conv2d(12, 64, 3, padding=1)
        self.conv2 = nn.Conv2d(64, 128, 3, padding=1)
        self.conv3 = nn.Conv2d(128, 256, 3, padding=1)
        
        # Fully connected layers for evaluation
        self.fc1 = nn.Linear(256 * 8 * 8, 512)
        self.fc2 = nn.Linear(512, 1)
    
    def forward(self, x):
        x = torch.relu(self.conv1(x))
        x = torch.relu(self.conv2(x))
        x = torch.relu(self.conv3(x))
        x = x.view(-1, 256 * 8 * 8)
        x = torch.relu(self.fc1(x))
        return torch.tanh(self.fc2(x))
```

## Training Process

The engine learns through **self-play reinforcement learning**:

1. Generate positions by playing games against itself
2. Evaluate positions using the neural network
3. Update weights based on game outcomes
4. Repeat for thousands of iterations

```python
def train_engine(model, num_games=1000):
    optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
    
    for game in range(num_games):
        positions = generate_self_play_game(model)
        
        for position, outcome in positions:
            prediction = model(position)
            loss = nn.MSELoss()(prediction, outcome)
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
```

## What I Learned

Building Pamela taught me valuable lessons about:

1. **Neural Network Design** - How to architect networks for board game AI
2. **Reinforcement Learning** - Self-play training and reward signals
3. **Position Encoding** - Representing chess boards as neural network inputs
4. **PyTorch Fundamentals** - Training loops, optimization, and model architecture
5. **Chess Programming** - Move generation, board evaluation, and game theory

## Challenges

- **Training Time**: Neural networks require significant computation
- **Position Representation**: Finding the best way to encode chess boards
- **Overfitting**: Preventing the network from memorizing positions
- **Evaluation Metrics**: Measuring engine strength objectively

## Future Improvements

- Add Monte Carlo Tree Search (MCTS) for better move selection
- Implement opening book and endgame tablebases
- Train on larger datasets from master-level games
- Optimize inference speed for real-time play

## Links

- [GitHub Repository](https://github.com/corbynfang/PamelaChessEngine)
- [PyTorch Documentation](https://pytorch.org/docs/)
- [Chess Programming Wiki](https://www.chessprogramming.org/)

---

> "Chess is the gymnasium of the mind." - This project was my workout!
