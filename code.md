## Comandos usados na construção do app 

### 1° fase
```javascript

// primeira fase
moveForward();
moveForward();

```


### 2° fase
```javascript

// segunda fase
moveForward();
moveForward();
moveForward();

```

### 3° fase
```javascript

// terceira fase
moveForward();
moveForward();
turnRight();
moveForward();

```

### 4° fase
```javascript
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();

```

### 5° fase
```javascript
turnRight();
moveForward();
turnLeft();
moveForward();
moveForward();
moveForward();
turnLeft();
moveForward();

```


### 6° fase
```javascript
for (var count = 0; count < 5; count++) {
  moveForward();
}
```

### 7° fase
```javascript
turnRight();
for (var count = 0; count < 5; count++) {
  moveForward();
}
```

### 8° fase
```javascript
for (var count = 0; count < 4; count++) {
  moveForward();
}
turnLeft();
for (var count2 = 0; count2 < 5; count2++) {
  moveForward();
}
```

### 10° fase
```javascript
while (notFinished()) {
  moveForward();
}
```

### 11° fase
```javascript
while (notFinished()) {
  moveForward();
  moveForward();
  turnLeft();
}
```

### 12° fase
```javascript
while (notFinished()) {
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}
```

### 13° fase
```javascript
while (notFinished()) {
  turnRight();
  moveForward();
  turnLeft();
  moveForward();
}
```


### 14° fase
```javascript
while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
    moveForward();
  }
}
```

### 15° fase
```javascript
while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}
```

### 16° fase
```javascript
while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}
```

### 17° fase
```javascript
while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}
```

### 18° fase
```javascript
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}
```

### 19° fase
```javascript
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnRight();
  }
}
```

### 20° fase
```javascript
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathRight()) {
      turnRight();
    } else {
      turnLeft();
    }
  }
}
```