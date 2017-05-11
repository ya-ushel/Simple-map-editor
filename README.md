# Simple map editor

The map editor provides a comfortable work with the source code of the map. It consists of various tools, blocks and mesh for their display

---

## Docs

1. [Getting Started](#getting-started)
1. [Features](#features)
1. [How it works](#how-it-works)

---


## Getting Started

1. Clone this project `git clone https://github.com/ya-ushel/Simple-map-editor.git`
1. Run `yarn install` from root directory
1. Run `yarn run start-win (windows), start (linux / macOs)`

---

## Features

| Feature          | Description                         |
|------------------|-------------------------------------|
| Map              |                           Available |
| Blocks           |                           Available |
| Tools            |                           Available |
---

## How it works

### 1. Map

![map](http://i.piccy.info/i9/80495c3ddc7d243a82d8a2d1228a2745/1494485872/18764/1144576/map.png)  
> A map is a two-dimensional array of cells.



### 2. Tools

* ![hand tool](http://i.piccy.info/i9/16d39b65b783dc487c287cdb49a353d6/1494442914/984/1144576/hand.png)  **Hand tool**.  
This tool allows you to insert the selected block from the panel of blocks on the card. There are two types of insertion: inserting one block - clicking the mouse, and inserting several blocks - by clamping.

* ![delete tool](http://i.piccy.info/i9/bb26612e6ba5589ea1f4e58844930bf5/1494443301/992/1144576/delete.png) **Delete tool**.  
Removal works on the principle of installation, but, accordingly, removes blocks

* ![select tool](http://i.piccy.info/i9/75169cd73e42b189b667b7d701437137/1494444113/474/1144576/icon.png) **Select tool**.  
At the moment this is a simple selection that allows you to just select cells on the map and change their contents

* ![create tool](http://i.piccy.info/i9/c797d544f3379c16388a2712d713d756/1494444130/1231/1144576/add.png) **Create tool**.  
The tool allows you to generate pre-prepared block structures
