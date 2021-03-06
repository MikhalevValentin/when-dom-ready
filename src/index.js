// Loaded ready states
const loadedStates = ['interactive', 'complete'];

// Return Promise
const whenDomReady = (cb, doc) => new Promise(resolve => {
	// Allow doc to be passed in as the lone first param
	if (cb && typeof cb !== 'function') {
		doc = cb;
		cb = null;
	}

	// Use global document if we don't have one
	doc = doc || window.document;

	// Handle DOM load
	const done = () => resolve(cb && cb());

	// Resolve now if DOM has already loaded
	// Otherwise wait for DOMContentLoaded
	if (loadedStates.includes(doc.readyState)) {
		setTimeout(done, 0);
	} else {
		doc.addEventListener('DOMContentLoaded', done);
	}
});

// Promise chain helper
whenDomReady.resume = doc => val => whenDomReady(doc).then(() => val);

module.exports = whenDomReady;
