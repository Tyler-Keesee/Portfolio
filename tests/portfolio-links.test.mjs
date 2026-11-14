import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const read = x => fs.readFileSync(path.join(root, x), 'utf8');

test('all public project links target current repositories or local screenshots', () => {
  const src = read('main.js');
  assert.doesNotMatch(src, /rescuepc-repairs\.github\.io/);
  assert.match(src, /View archived screenshot/);
  assert.match(src, /https:\/\/www\.rescuepcrepairs\.com\//);
  for (const url of src.matchAll(/url: "Projects\/([^"]+)"/g)) {
    assert.ok(fs.existsSync(path.join(root, 'Projects', url[1])), 'missing archived image ' + url[1]);
  }
});
test('portfolio metadata no longer points at the old username', () => {
  const files = ['index.html', 'manifest.json', 'building-scalable-ai-solutions.html'];
  for (const file of files) assert.doesNotMatch(read(file), /tyler1201623/i);
  const manifest = JSON.parse(read('manifest.json'));
  assert.equal(manifest.scope, './');
  assert.equal(manifest.start_url, './index.html');
});
test('offline cache uses deploy-relative assets and excludes the missing offline page', () => {
  const sw = read('sw.js');
  assert.match(sw, /self\.registration\.scope/);
  assert.doesNotMatch(sw, /'\/offline\.html'/);
});

test('featured technologies match the corresponding source repositories', () => {
  const src = read('main.js');
  assert.match(src, /title: "Electrical Engineering Platform"[\\s\\S]*?tech: \["JavaScript", "Electrical concepts", "Learning links"\]/);
  assert.match(src, /title: "PyLearn-IDE"[\\s\\S]*?tech: \["JavaScript", "Brython", "Learning tools"\]/);
});
