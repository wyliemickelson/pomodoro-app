const settingsModal = document.getElementById('settings');
const pageMask = document.getElementById('pageMask');

export const pageManipulation = {
	toggleSettings: () => {
		pageManipulation.toggleHidden(settingsModal);
		pageManipulation.toggleHidden(pageMask);
	},

	toggleHidden: (element) => {
		element.classList.toggle('hidden');
	},
};
