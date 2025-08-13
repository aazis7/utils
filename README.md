# 🛠️ @aazis7/utils

A lightweight, isomorphic utility library for apps.  
Built for personal productivity, shared for the world. ✨

---

## Installation

```bash
npm install @aazis7/utils
# or
yarn add @aazis7/utils
# or
pnpm add @aazis7/utils
```

## Usage

Here's some examples of the library usage:

```ts
import { slugify, clamp, sleep } from '@aazis7/utils'

const slug = slugify('Hello World!')
console.log(slug) // -> "hello-world"

const num = clamp(15, 0, 10)
console.log(num) // -> 10

await sleep(1000) // Waits for 1 second
```

## API Reference

### String Utilities

#### `slugify(str: string): string`

Converts a string to a URL-friendly slug.

```ts
import { slugify } from '@aazis7/utils'

slugify('Hello World!') // -> "hello-world"
slugify('Special Characters & Symbols!') // -> "special-characters-symbols"
```

#### `capitalize(str: string): string`

Capitalizes the first letter of a string.

```ts
import { capitalize } from '@aazis7/utils'

capitalize('hello world') // -> "Hello world"
capitalize('javaScript') // -> "JavaScript"
```

### Number Utilities

#### `clamp(value: number, min: number, max: number): number`

Clamps a number between a minimum and maximum value.

```ts
import { clamp } from '@aazis7/utils'

clamp(15, 0, 10) // -> 10
clamp(-5, 0, 10) // -> 0
clamp(5, 0, 10) // -> 5
```

#### `randomInt(min: number, max: number): number`

Generates a random integer between min (inclusive) and max (inclusive).

```ts
import { randomInt } from '@aazis7/utils'

randomInt(1, 10) // -> Random number between 1 and 10
randomInt(0, 100) // -> Random number between 0 and 100
```

### Object Utilities

#### `deepClone<T>(obj: T): T`

Creates a deep clone of an object.

```ts
import { deepClone } from '@aazis7/utils'

const original = { a: 1, b: { c: 2 } }
const cloned = deepClone(original)
cloned.b.c = 3
console.log(original.b.c) // -> 2 (unchanged)
```

#### `groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>`

Groups an array of objects by a specified key or function.

```ts
import { groupBy } from '@aazis7/utils'

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
]

const grouped = groupBy(users, 'role')
// -> { admin: [Alice, Charlie], user: [Bob] }

// Using a function
const groupedByNameLength = groupBy(users, (user) =>
  user.name.length.toString(),
)
```

### Time Utilities

#### `sleep(ms: number): Promise<void>`

Creates a promise that resolves after the specified number of milliseconds.

```ts
import { sleep } from '@aazis7/utils'

async function example() {
  console.log('Before sleep')
  await sleep(1000) // Wait 1 second
  console.log('After sleep')
}
```

#### `formatDate(date: Date, format?: string): string`

Formats a date according to the specified format string.

```ts
import { formatDate } from '@aazis7/utils'

const date = new Date('2024-01-15T10:30:00')

formatDate(date) // -> Default format
formatDate(date, 'YYYY-MM-DD') // -> "2024-01-15"
formatDate(date, 'DD/MM/YYYY HH:mm') // -> "15/01/2024 10:30"
```

### Validation Utilities

#### `isEmail(email: string): boolean`

Validates if a string is a valid email address.

```ts
import { isEmail } from '@aazis7/utils'

isEmail('user@example.com') // -> true
isEmail('invalid-email') // -> false
isEmail('test.email+tag@domain.co.uk') // -> true
```

#### `isUuid(uuid: string): boolean`

Validates if a string is a valid UUID (v4).

```ts
import { isUuid } from '@aazis7/utils'

isUuid('550e8400-e29b-41d4-a716-446655440000') // -> true
isUuid('invalid-uuid') // -> false
isUuid('550e8400-e29b-41d4-a716-44665544000') // -> false (invalid length)
```

## Tree Shaking

This library is built with tree shaking in mind. You can import only the utilities you need:

```ts
// Import only what you need
import { slugify, clamp } from '@aazis7/utils'

// Or import specific modules
import { slugify } from '@aazis7/utils/string'
import { clamp } from '@aazis7/utils/number'
```

## TypeScript Support

This library is written in TypeScript and includes full type definitions. All utilities are properly typed for the best development experience.

## Browser & Node.js Compatible

All utilities are isomorphic and work in both browser and Node.js environments without any platform-specific dependencies.

## Contributing

Contributions are welcome! Please Read [CONTRIBUTING.md](https://github.com/aazis7/utils/blob/main/CONTRIBUTING.md) for details. Please feel free to submit a Pull Request.

## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/aazis7/utils/discussions)
- The email which is located [in GitHub profile](https://github.com/aazis7)

## License

MIT License - see [LICENSE](https://github.com/aazis7/utils/blob/main/LICENSE) file for details.

---

**Built with ❤️ for developer productivity**
