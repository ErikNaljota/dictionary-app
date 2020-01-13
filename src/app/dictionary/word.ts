export class Word {
  word: string[][] = [['english', 'hello'], ['dutch', 'hoi'], ['estonian', 'tere']];

  generateMap(): Map<string, string> {
    const map = new Map();
    this.word.forEach(word1 => map.set(word1[0], word1[1]));
    return map;
  }
}
