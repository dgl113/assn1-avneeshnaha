import path from 'path';

describe('all tests', () => {
  let firstDialog = true;

  const dialogHandler2 = jest.fn((dialog) => {
    if (firstDialog) {
      firstDialog = false;
      return dialog.accept('Adam Smith');
    } else {
      return dialog.accept('7');
    }
  });

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    page.on('dialog', dialogHandler2);
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
  });

  it('gstAmount type should be "number"', async () => {
    const value = await page.evaluate('gstAmount');
    expect(typeof value).toEqual('number');
  });

  it('gstAmount value should be 78.75', async () => {
    const value = await page.evaluate('gstAmount');
    expect(value).toBeCloseTo(78.75);
  });

  it('gstRate type should be "number"', async () => {
    const value = await page.evaluate('gstRate');
    expect(typeof value).toEqual('number');
  });

  it('gstRate value should be 5%', async () => {
    const value = await page.evaluate('gstRate');
    expect(value).toBeCloseTo(0.05);
  });

  it('guestName type should be "string"', async () => {
    const value = await page.evaluate('guestName');
    expect(typeof value).toEqual('string');
  });

  it('guestName value should be "Adam Smith"', async () => {
    const value = await page.evaluate('guestName');
    expect(value).toBe('Adam Smith');
  });

  it('guestMessage type should be "string"', async () => {
    const value = await page.evaluate('guestMessage');
    expect(typeof value).toEqual('string');
  });

  it('guestMessage value should be "Guest: Adam Smith"', async () => {
    const value = await page.evaluate('guestMessage');
    expect(value).toBe('Guest: Adam Smith');
  });

  it('nightlyRate type should be "number"', async () => {
    const value = await page.evaluate('nightlyRate');
    expect(typeof value).toEqual('number');
  });

  it('nightlyRate value should be $225', async () => {
    const value = await page.evaluate('nightlyRate');
    expect(value).toBeCloseTo(225);
  });

  it('numberOfNights type should be "number"', async () => {
    const value = await page.evaluate('numberOfNights');
    expect(typeof value).toEqual('number');
  });

  it('numberOfNights value should be 7', async () => {
    const value = await page.evaluate('numberOfNights');
    expect(value).toBeCloseTo(7);
  });

  it('pstAmount type should be "number"', async () => {
    const value = await page.evaluate('pstAmount');
    expect(typeof value).toEqual('number');
  });

  it('pstAmount value should be $126.00', async () => {
    const value = await page.evaluate('pstAmount');
    expect(value).toBeCloseTo(126);
  });

  it('pstRate type should be "number"', async () => {
    const value = await page.evaluate('pstRate');
    expect(typeof value).toEqual('number');
  });

  it('pstRate value should be 8%', async () => {
    const value = await page.evaluate('pstRate');
    expect(value).toBeCloseTo(0.08);
  });

  it('subTotal type should be "number"', async () => {
    const value = await page.evaluate('subTotal');
    expect(typeof value).toEqual('number');
  });

  it('subTotal value should be $1575.00', async () => {
    const value = await page.evaluate('subTotal');
    expect(value).toBeCloseTo(1575);
  });

  it('total type should be "number"', async () => {
    const value = await page.evaluate('total');
    expect(typeof value).toEqual('number');
  });

  it('total value should be $1779.75', async () => {
    const value = await page.evaluate('total');
    expect(value).toBeCloseTo(1779.75);
  });
});
