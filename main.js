const core = require('@actions/core');

try {
	const base = parseInt(core.getInput('base'), 10);
	const run = parseInt(core.getInput('run-id'), 10);
	const bn = (base + run).toString();
	core.setOutput('build-number', bn);
	core.exportVariable('BUILD_NUMBER', bn); 
} catch (error) {
	core.setFailed(error.message);
}
