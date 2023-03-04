jest
  .dontMock('../bot.js');

process.env.WIT_TOKEN = 'ZZNLYWFMP24Z3C4MAYW2DE5HXI25X2TL';
const bot = require('../bot.js');

describe('Bot tests', () => {

  it('Bot creation', () => {
    const client = bot.getWit(); // Just testing the creation  
    expect(client).not.toBeNull();
  });
});
