const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const repoRoot = path.join(__dirname, '..');
const testsDir = path.join(repoRoot, 'tests');
const workflowPath = path.join(repoRoot, '.github', 'workflows', 'playwright.yml');

function collectTestEntries(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => !d.name.startsWith('.'))
    .map(d => ({ name: d.name, isDir: d.isDirectory() }))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(d => (d.isDir ? `tests/${d.name}/` : `tests/${d.name}`));
  return entries;
}

function updateWorkflowOptions(options) {
  if (!fs.existsSync(workflowPath)) {
    console.error('Workflow file not found:', workflowPath);
    process.exit(1);
  }
  const raw = fs.readFileSync(workflowPath, 'utf8');
  const doc = yaml.load(raw) || {};

  if (!doc.on) doc.on = {};
  if (!doc.on.workflow_dispatch) doc.on.workflow_dispatch = {};
  if (!doc.on.workflow_dispatch.inputs) doc.on.workflow_dispatch.inputs = {};
  if (!doc.on.workflow_dispatch.inputs.test_spec) doc.on.workflow_dispatch.inputs.test_spec = {};

  // Ensure default is 'tests' and description preserved if present
  doc.on.workflow_dispatch.inputs.test_spec.description = doc.on.workflow_dispatch.inputs.test_spec.description || 'Select test file, folder, or pattern to run';
  doc.on.workflow_dispatch.inputs.test_spec.required = !!doc.on.workflow_dispatch.inputs.test_spec.required;
  doc.on.workflow_dispatch.inputs.test_spec.default = 'tests';
  doc.on.workflow_dispatch.inputs.test_spec.options = ['tests', ...options];

  const out = yaml.dump(doc, { noRefs: true, lineWidth: 200 });
  fs.writeFileSync(workflowPath, out, 'utf8');
  console.log('Updated workflow options with', options.length, 'entries');
}

function main() {
  const options = collectTestEntries(testsDir);
  updateWorkflowOptions(options);
}

main();
