import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  });

  test('should create correctly a haiku object',() => {
    expect(haiku.entry).toEqual("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  }); 

  test('should separate our haiku object into three lines', () => {
    expect(haiku.line1).toEqual("I run, fall, rerun");
    expect(haiku.line2).toEqual("Fall, get back up, and then I");
    expect(haiku.line3).toEqual("drink from water cup");
  });

  test('should return 1 syllable if the word is 3 letters or less', () => {
    expect(haiku.getSyllables('yes')).toEqual(1);
  });

  test('should return the number of syllables for a word with 4 letters or more', () => {
    expect(haiku.getSyllables('body')).toEqual(2);
  });

  test('should return the number of syllables, counting sequential vowels as a syllable', () => {
    expect(haiku.getSyllables('meat')).toEqual(1);
  });

  test('should remove es and ed from the end of a word and return the number of syllables', () => {
    expect(haiku.getSyllables("wanted")).toEqual(1);
  });

  test('should remove a y from the end of a word and return the number of syllables', () => {
    expect(haiku.getSyllables("yeet")).toEqual(1);
  });
  

//   test('should count two consecutive vowels as one vowel', () => {
//     let haiku3 = new Haiku("I run, fall, between\nFall, get back up, and then I\ndrink from water cup");
//     expect(haiku3.getSyllables(haiku3.line1)).toEqual(5);
//   })

//   test("should return if it's a haiku or not", () => {
//     expect(haiku.isHaiku()).toEqual(true);
//     let haiku2 = new Haiku("I run, fall\nFall, get back up, and then I\ndrink from water cup");
//     expect(haiku2.isHaiku()).toEqual(false);
//   });
});