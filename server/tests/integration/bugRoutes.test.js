const request = require('supertest');
const express = require('express');
const app = require('../../src/app');

test('POST /api/bugs creates a bug', async () => {
  const bug = { title: 'Test bug', description: 'Bug description' };
  const res = await request(app).post('/api/bugs').send(bug);
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Test bug');
});
