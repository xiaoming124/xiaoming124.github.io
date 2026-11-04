const filters = document.querySelector('.publication-filters');
if (filters) {
  filters.hidden = false;
  const papers = [...document.querySelectorAll('.publication')];
  const count = filters.querySelector('.result-count');
  function select(button) {
    filters.querySelectorAll('button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    papers.forEach(paper => { paper.hidden = button.dataset.filter !== 'All' && paper.dataset.kind !== button.dataset.filter; });
    count.textContent = `${papers.filter(paper => !paper.hidden).length} publications`;
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (button) select(button);
  });
  select(filters.querySelector('button'));
}
