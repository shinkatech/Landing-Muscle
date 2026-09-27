// Fotos: banco gratuito Unsplash (licença Unsplash, uso comercial liberado).
// Para usar fotos próprias, troque a URL por um caminho local, ex.: '/images/hero.jpg' (arquivo em public/images).
export const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroImage = img('1704223523169-52feeed90365', 1100)
export const videoCover = img('1534438327276-14e5300c3a48', 2000)

// Conteúdo da página. Os números da academia (alunos, unidades, preços,
// avaliações) são EXEMPLOS: troque pelos dados reais do seu negócio.
// As informações de saúde e legislação são reais e têm fonte indicada.

export type IconName =
  | 'dumbbell'
  | 'personal'
  | 'group'
  | 'swim'
  | 'bike'
  | 'glove'
  | 'yoga'
  | 'pulse'

export interface NavLink {
  id: string
  label: string
}

export const navLinks: NavLink[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'planos', label: 'Planos' },
  { id: 'unidades', label: 'Unidades' },
  { id: 'duvidas', label: 'Dúvidas' },
]

export const heroTags = [
  'Musculação',
  'Personal trainer',
  'Aulas coletivas',
  'Natação',
  'Cardio',
  'Treino funcional',
  'Lutas',
]

export interface Stat {
  value: number
  prefix?: string
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 12, suffix: '+', label: 'Anos de experiência' },
  { value: 27, suffix: ' mil+', label: 'Alunos ativos' },
  { value: 60, suffix: '+', label: 'Aulas por semana' },
  { value: 110, suffix: '+', label: 'Professores com CREF' },
]

/** Diretrizes da OMS sobre atividade física e comportamento sedentário (2020), adultos de 18 a 64 anos. */
export const whoFacts = [
  { value: '150–300 min', text: 'de atividade aeróbica moderada por semana' },
  { value: '75–150 min', text: 'se a atividade for vigorosa, como corrida ou HIIT' },
  { value: '2+ dias', text: 'por semana de fortalecimento muscular' },
]

export interface Service {
  title: string
  description: string
  icon: IconName
  image: string
  imageHint: string
}

export const services: Service[] = [
  {
    title: 'Musculação',
    description: 'Peso livre, racks e máquinas de força com orientação em todos os horários.',
    icon: 'dumbbell',
    image: img('1641337221253-fdc7237f6b61', 800),
    imageHint: 'Aluno no supino com professor ao lado',
  },
  {
    title: 'Personal trainer',
    description: 'Treino individual, planejado e ajustado semana a semana por um profissional CREF.',
    icon: 'personal',
    image: img('1571019614242-c5c5dee9f50b', 800),
    imageHint: 'Personal corrigindo a postura da aluna',
  },
  {
    title: 'Aulas coletivas',
    description: 'Funcional, spinning, HIIT e dança em uma grade semanal para todos os níveis.',
    icon: 'group',
    image: img('1517130038641-a774d04afb3c', 800),
    imageHint: 'Turma em aula de funcional',
  },
  {
    title: 'Natação',
    description: 'Piscina semiolímpica aquecida, com turmas da adaptação ao aperfeiçoamento.',
    icon: 'swim',
    image: img('1530549387789-4c1017266635', 800),
    imageHint: 'Nadador na borda da piscina',
  },
  {
    title: 'Cardio',
    description: 'Esteiras, bikes, elípticos e remo ergométrico para o seu condicionamento.',
    icon: 'bike',
    image: img('1648995361141-30676a75fd27', 800),
    imageHint: 'Fileira de esteiras com luz baixa',
  },
  {
    title: 'Lutas',
    description: 'Muay thai, boxe e jiu-jitsu com turmas separadas por nível de experiência.',
    icon: 'glove',
    image: img('1525680996651-0222228be6f0', 800),
    imageHint: 'Treino de muay thai com aparador',
  },
  {
    title: 'Pilates e yoga',
    description: 'Mobilidade, postura e respiração em turmas reduzidas e ambiente tranquilo.',
    icon: 'yoga',
    image: img('1599901860904-17e6ed7083a0', 800),
    imageHint: 'Aula de yoga em sala iluminada',
  },
  {
    title: 'Avaliação física',
    description: 'Bioimpedância, dobras cutâneas e testes de força para medir sua evolução.',
    icon: 'pulse',
    image: img('1648542036561-e1d66a5ae2b1', 800),
    imageHint: 'Professor fazendo avaliação com adipômetro',
  },
]

export interface Reason {
  highlight: string
  rest: string
  text: string
  image: string
  imageHint: string
}

export const reasons: Reason[] = [
  {
    highlight: 'Equipamentos',
    rest: ' de ponta',
    text: 'Máquinas de força com ajuste biomecânico, halteres de 1 a 50 kg, racks de agachamento e área de cardio completa, com manutenção preventiva toda semana.',
    image: img('1674834727206-4bc272bfd8da', 1200),
    imageHint: 'Área de musculação com máquinas alinhadas',
  },
  {
    highlight: 'Professores',
    rest: ' qualificados',
    text: 'Todos são formados em Educação Física e têm registro ativo no CREF, como exige a Lei nº 9.696/1998. Eles montam o seu treino, corrigem a execução e ajustam a carga conforme a sua evolução.',
    image: img('1758875569136-9936939e6179', 1200),
    imageHint: 'Aluno com cordas navais e professor',
  },
  {
    highlight: 'Grade ampla',
    rest: ' de aulas',
    text: 'Mais de 60 aulas por semana, das 6h às 22h: funcional, spinning, HIIT, dança, lutas, pilates e yoga. Reserve sua vaga pelo app em poucos toques.',
    image: img('1520877880798-5ee004e3f11e', 1200),
    imageHint: 'Sala de spinning cheia',
  },
  {
    highlight: 'Avaliação',
    rest: ' e acompanhamento',
    text: 'Avaliação física na matrícula e reavaliação a cada 90 dias. Você acompanha peso, composição corporal e força pelo app e enxerga a sua evolução em números.',
    image: img('1738523686534-7055df5858d6', 1200),
    imageHint: 'Bioimpedância em andamento',
  },
  {
    highlight: 'Comunidade',
    rest: ' acolhedora',
    text: 'Desafios mensais, grupo de corrida aos sábados e um ambiente sem julgamentos, do primeiro dia de treino até a sua primeira prova.',
    image: img('1604954055722-7f80571fbfc3', 1200),
    imageHint: 'Grupo de alunos comemorando após o treino',
  },
]

export interface Plan {
  name: string
  monthly: number
  annual: number
  description: string
  features: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Essencial',
    monthly: 99.9,
    annual: 84.9,
    description: 'Para quem quer treinar musculação e cardio com orientação profissional.',
    features: [
      'Acesso ilimitado à sua unidade',
      'Área de musculação e cardio',
      'Treino personalizado no app',
      'Avaliação física na matrícula',
    ],
  },
  {
    name: 'Plus',
    monthly: 149.9,
    annual: 127.9,
    description: 'Acesso completo à rede e às aulas coletivas, para variar o treino sem limites.',
    features: [
      'Tudo do Essencial',
      'Acesso a todas as unidades',
      'Aulas coletivas ilimitadas',
      'Leve um amigo 4x por mês',
      'Reavaliação física a cada 90 dias',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    monthly: 229.9,
    annual: 194.9,
    description: 'Acompanhamento de perto e toda a estrutura do clube, da piscina à sauna.',
    features: [
      'Tudo do Plus',
      '2 sessões de personal por mês',
      'Natação e lutas inclusas',
      'Área de relaxamento com sauna',
      'Armário fixo e toalha',
    ],
  },
]

export type Region = 'Sudeste' | 'Nordeste' | 'Centro-Oeste' | 'Sul' | 'Norte'

export interface City {
  name: string
  region: Region
  units: number
  /** posição no mapa em % (projeção equirretangular das coordenadas reais) */
  x: number
  y: number
  hq?: boolean
}

// Coordenadas reais das cidades, convertidas para a área do mapa (620 × 560).
const pos = (px: number, py: number) => ({ x: (px / 620) * 100, y: (py / 560) * 100 })

export const cities: City[] = [
  { name: 'São Paulo', region: 'Sudeste', units: 9, hq: true, ...pos(448, 407) },
  { name: 'Campinas', region: 'Sudeste', units: 2, ...pos(436, 392) },
  { name: 'Rio de Janeiro', region: 'Sudeste', units: 5, ...pos(491, 399) },
  { name: 'Belo Horizonte', region: 'Sudeste', units: 3, ...pos(482, 359) },
  { name: 'Vitória', region: 'Sudeste', units: 1, ...pos(527, 364) },
  { name: 'Salvador', region: 'Nordeste', units: 2, ...pos(550, 266) },
  { name: 'Recife', region: 'Nordeste', units: 2, ...pos(596, 201) },
  { name: 'Fortaleza', region: 'Nordeste', units: 2, ...pos(550, 143) },
  { name: 'Natal', region: 'Nordeste', units: 1, ...pos(592, 171) },
  { name: 'Brasília', region: 'Centro-Oeste', units: 3, ...pos(432, 304) },
  { name: 'Goiânia', region: 'Centro-Oeste', units: 2, ...pos(414, 316) },
  { name: 'Cuiabá', region: 'Centro-Oeste', units: 1, ...pos(328, 301) },
  { name: 'Campo Grande', region: 'Centro-Oeste', units: 1, ...pos(346, 366) },
  { name: 'Curitiba', region: 'Sul', units: 2, ...pos(414, 432) },
  { name: 'Florianópolis', region: 'Sul', units: 1, ...pos(423, 461) },
  { name: 'Porto Alegre', region: 'Sul', units: 2, ...pos(389, 494) },
  { name: 'Manaus', region: 'Norte', units: 2, ...pos(278, 135) },
  { name: 'Belém', region: 'Norte', units: 1, ...pos(424, 113) },
]

export const regions: Region[] = ['Sudeste', 'Nordeste', 'Centro-Oeste', 'Sul', 'Norte']

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Preciso de atestado médico para começar?',
    answer:
      'Na matrícula você responde ao PAR-Q, o Questionário de Prontidão para Atividade Física. Se alguma resposta indicar risco, pedimos uma liberação médica antes do primeiro treino. As regras podem variar conforme a lei do seu estado.',
  },
  {
    question: 'Quantas vezes por semana devo treinar?',
    answer:
      'A OMS recomenda a adultos de 150 a 300 minutos de atividade moderada (ou 75 a 150 de vigorosa) por semana, mais fortalecimento muscular em 2 dias ou mais. Seu professor adapta essa meta à sua rotina e ao seu nível.',
  },
  {
    question: 'Os professores são formados?',
    answer:
      'Sim. Todos são profissionais de Educação Física com registro ativo no CREF, exigência da Lei nº 9.696/1998 para quem orienta atividades físicas.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'No plano mensal, sim, sem multa: basta solicitar pelo app ou na recepção. O plano anual tem fidelidade de 12 meses, e o cancelamento antecipado segue as condições do contrato.',
  },
  {
    question: 'Posso experimentar antes de me matricular?',
    answer:
      'Pode. Novos alunos têm 7 dias grátis para conhecer a estrutura, fazer aulas coletivas e treinar com orientação, sem compromisso.',
  },
]

export const developer = {
  name: 'ShinkaTech',
  url: 'https://www.shinkatech.com.br/',
}

export const contact = {
  email: 'contato@forjaacademia.com.br',
  cnpj: '[00.000.000/0001-00]',
  hours: 'Seg a sex 5h–23h · Sáb 8h–18h · Dom e feriados 8h–14h',
}

export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
