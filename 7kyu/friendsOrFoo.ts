export function friend(friends: string[]): string[] { 
    return friends.map(el => el.length === 4? el:"").filter(e => e)
  }