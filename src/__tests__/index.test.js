import health from '../index';

test('should critical', () => {
  const expected = 'critical';
  const response = health({ name: 'Маг', health: 10 });

  expect(response).toBe(expected);
});

test('should healthy', () => {
  const expected = 'healthy';
  const response = health({ name: 'Маг', health: 60 });

  expect(response).toBe(expected);
});

test('should wounded', () => {
  const expected = 'wounded';
  const response = health({ name: 'Маг', health: 40 });

  expect(response).toBe(expected);
});
