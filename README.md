# Utilities
This package provides several tools and utils resources javascrit

1. calculate storage from broswer device
```
import { calculateStorage } from '@jucesarsilva/utilities'

const calculate = async () => {
  const { usage, quota } = await calculateStorage()
}
```

2. convert bytes into (bytes, KB, MB, GB or TB)
```
import { convertBytes } from '@jucesarsilva/utilities'

const space = convertBytes(2043212)
/* space = "1.95 MB" */ 
```