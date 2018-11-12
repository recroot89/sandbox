export default () => {
  // BEGIN (write your solution here)
  const elements = document.querySelectorAll('a[data-toggle]');
  for (const element of elements) {
    element.addEventListener('click', event => {
      const closest = event.currentTarget.parentNode.parentNode;
      for (const el of closest.querySelectorAll('a[data-toggle]')) {
        const oldId = el.getAttribute("href").slice(1);
        el.className = "nav-link";
        document.getElementById(oldId).className = "tab-pane";
      }
      
      const id = event.currentTarget.getAttribute("href").slice(1);
      event.currentTarget.className = "nav-link active";
      document.getElementById(id).className = "tab-pane active";
    });
  }
  // END
};

// Teacher's solution

const handle = ({ target }) => {
  const nav = target.closest('.nav');
  const current = nav.querySelector('a.active');
  current.classList.remove('active');
  const currentTabContentId = current.hash.slice(1);
  const currentTabContent = document.getElementById(currentTabContentId);
  currentTabContent.classList.remove('active');

  target.classList.add('active');
  const nextTabContentId = target.hash.slice(1);
  const nextTabContent = document.getElementById(nextTabContentId);
  nextTabContent.classList.add('active');
};

const links = document.querySelectorAll('a[data-toggle]');
links.forEach((element) => {
  element.addEventListener('click', handle);
});
