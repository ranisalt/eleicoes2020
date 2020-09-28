(() => {
  const prefixes = [
    ['Advogado', 'Advogada'],
    ['Batman'],
    ['Betinho'],
    ['Cantor'],
    ['Capitão', 'Capitã'],
    ['Carlão', 'Carlota'],
    ['Chico'],
    ['Delegado', 'Delegada'],
    ['Doutor', 'Doutora'],
    ['Gretchen'],
    ['Homem Aranha'],
    ['Irmão', 'Irmã'],
    ['Jesus'],
    ['Lagartixa'],
    ['Loiro', 'Loira'],
    ['Messi'],
    ['Missionário', 'Missionária'],
    ['Neymar'],
    ['O Homem', 'A Mulher'],
    ['Padre', 'Madre'],
    ['Pastor', 'Pastora'],
    ['Primo', 'Prima'],
    ['Professor', 'Professora'],
    ['Ronaldinho'],
    ['Seu Madruga'],
    ['Super Homem', 'Mulher Maravilha'],
    ['Toninho'],
    ['Vampiro', 'Vampira'],
    ['Viado'],
    ['Zé'],
  ], suffixes = [
    ['Abençoado', 'Abençoada'],
    ['Careca'],
    ['Cloroquina'],
    ['Cover'],
    ['da Academia'],
    ['da Bahia'],
    ['da Bike'],
    ['da Educação'],
    ['da Família Tradicional'],
    ['da Farmácia'],
    ['da Feira'],
    ['da Igreja'],
    ['da Mecânica'],
    ['da Padaria'],
    ['da Peixaria'],
    ['da Pipoca'],
    ['da Praça'],
    ['da Saúde'],
    ['da Segurança'],
    ['da Sorveteria'],
    ['da Van'],
    ['do Agreste'],
    ['do Amapá'],
    ['do Açougue'],
    ['do Bar'],
    ['do Churrasco'],
    ['do Crachá'],
    ['do Diabo'],
    ['do Disk Água'],
    ['do Esporte'],
    ['do Posto'],
    ['do SUS'],
    ['dos Teclados'],
    ['Gordo', 'Gorda'],
    ['Herói', 'Heroína'],
    ['Louco', 'Louca'],
    ['Motoboy'],
    ['Ninja'],
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
