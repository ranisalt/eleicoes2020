(() => {
  const prefixes = [
    ['Batman'],
    ['Capitão', 'Capitã'],
    ['Carlão', 'Carlota'],
    ['Chico'],
    ['Doutor', 'Doutora'],
    ['Gretchen'],
    ['Homem Aranha'],
    ['Irmão', 'Irmã'],
    ['Jesus'],
    ['Lagartixa'],
    ['Loiro', 'Loira'],
    ['Messi'],
    ['Neymar'],
    ['O Homem', 'A Mulher'],
    ['Primo', 'Prima'],
    ['Ronaldinho'],
    ['Seu Madruga'],
    ['Super Homem', 'Mulher Maravilha'],
    ['Toninho'],
    ['Viado'],
    ['Zé'],
  ], suffixes = [
    ['Abençoado', 'Abençoada'],
    ['Careca'],
    ['Cloroquina'],
    ['Cover'],
    ['da Bahia'],
    ['da Bike'],
    ['da Família Tradicional']
    ['da Pipoca'],
    ['da Saúde'],
    ['do Agreste'],
    ['do Amapá'],
    ['do Churrasco'],
    ['do Crachá'],
    ['do Diabo'],
    ['do Disk Água'],
    ['dos Teclados'],
    ['Gordo', 'Gorda'],
    ['Louco', 'Louca'],
    ['Motoboy'],
    ['Pimpão'],
    ['Taxista'],
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button'),
      out = document.querySelector('.output')

    const generate = () => {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      const g = Math.floor(Math.random() * prefix.length);
      out.innerText = `${prefix[g]} ${suffix[Math.min(g, suffix.length - 1)]}`;
    }

    btn.addEventListener('click', () => {
      window.requestAnimationFrame(generate)
    })
    window.requestAnimationFrame(generate)
  })
})()
