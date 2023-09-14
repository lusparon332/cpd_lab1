import {Cache} from "../src/cache";

test('if created without hits, hits will be 1', () => {
    const cache = new Cache()
    cache.addKV(1, 'one')
    expect(cache.getHits(1)).toBe(1)
});

test('hits value dec after hit', () => {
    const cache = new Cache()
    cache.addKV(1, 'one', 10)
    let a = cache.getValue(1)
    expect(cache.getHits(1)).toBe(9)
});


test('if hits count is 0', () => {
    const cache = new Cache()
    cache.addKV(1, 'one')
    let a = cache.getValue(1)
    expect(cache.getValue(1)).toBeNull()
});

test('if there is no key', () => {
    const cache = new Cache()
    expect(cache.getValue(1)).toBeNull()
});

test('value test', () => {
    const cache = new Cache()
    cache.addKV(1, 'one')
    expect(cache.getValue(1)).toBe('one')
});

test('value test 2', () => {
    const cache = new Cache()
    cache.addKV(2, 'two', 10)
    expect(cache.getValue(2)).toBe('two')
});

test('hits if there is no key', () => {
    const cache = new Cache()
    expect(cache.getHits(1)).toBeNull()
});

test('logs test', () => {
    const cache = new Cache()
    cache.addKV(1, 'one')
    cache.addKV(2, 'two', 2)
    let a = cache.getValue(1)
    a = cache.getValue(2)
    let my_logs = [{key: 1, value: 'one', hits_left: 0}, {key: 2, value: 'two', hits_left: 1}]
    let logs = cache.getLogs()
    expect(my_logs.sort()).toEqual(logs.sort())
});
