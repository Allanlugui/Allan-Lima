import { Language, PROJECTS, EDUCATION, EducationItem, PROFESSIONAL_REFERENCES, ProfessionalReferenceItem } from './portfolio-data';

export interface FieldActivityItem {
  id: string;
  title: Record<Language, string>;
  category: 'electrical' | 'generators_ups' | 'predictive' | 'hydraulic' | 'civil_painting';
  categoryLabel: Record<Language, string>;
  location: string;
  date: string;
  equipment: string[];
  standards: string[];
  description: Record<Language, string>;
  image: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: Record<Language, string>;
  category: 'electrical' | 'generators_ups' | 'predictive' | 'hydraulic' | 'civil_painting' | 'fullstack';
  categoryLabel: Record<Language, string>;
  summary: Record<Language, string>;
  challenge: Record<Language, string>;
  solution: Record<Language, string>;
  results: Record<Language, string>;
  equipment: string[];
  standards: string[];
  image?: string;
  date?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  location: string;
  period: Record<Language, string>;
  duration: Record<Language, string>;
  type: Record<Language, string>;
  description: Record<Language, string>;
  achievements: Record<Language, string[]>;
  skills: string[];
}

export interface SkillCategory {
  id: string;
  title: Record<Language, string>;
  skills: {
    name: string;
    level: number; // 0-100
    experienceYears: string;
    highlight?: boolean;
  }[];
}

export interface CertificationItem {
  id: string;
  name: string;
  code: string;
  authority: string;
  validity: Record<Language, string>;
  description: Record<Language, string>;
  iconName: string;
}

export interface BlogPostItem {
  id: string;
  title: Record<Language, string>;
  slug: string;
  category: 'case_study' | 'preventive_routine' | 'technical_norm' | 'troubleshooting';
  categoryLabel: Record<Language, string>;
  date: string;
  readTime: string;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  tags: string[];
  equipment: string[];
  published: boolean;
}

export interface PersonalInfo {
  name: string;
  titlePt: string;
  titleEn: string;
  titleEs: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
  whatsappNumber: string;
  availability: Record<Language, string>;
  jllExperience: Record<Language, string>;
  bio: Record<Language, string>;
  stats: {
    jllDuration: string;
    uptime: string;
    panelsMaintained: string;
    safetyIncidents: string;
  };
}

export interface PortfolioDatabase {
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  fieldActivities: FieldActivityItem[];
  skillsMatrix: SkillCategory[];
  certifications: CertificationItem[];
  blogPosts: BlogPostItem[];
  education: EducationItem[];
  references: ProfessionalReferenceItem[];
  lastUpdated: string;
}

export const DEFAULT_FIELD_ACTIVITIES: FieldActivityItem[] = [
  {
    id: 'fa_qgbt_termografia',
    title: {
      pt: 'Inspeção Termográfica Preditiva e Reaperto em QGBT 800A',
      en: 'Predictive Infrared Thermography & Torquing on 800A Main Distribution Panel',
      es: 'Inspección Termográfica Predictiva y Reapriete en QGBT 800A',
    },
    category: 'predictive',
    categoryLabel: {
      pt: 'Termografia Preditiva',
      en: 'Predictive Thermography',
      es: 'Termografía Predictiva',
    },
    location: 'JLL & ATS Facilities - Prédio Corporativo A+',
    date: '2026-08',
    equipment: ['Câmera Termográfica Fluke Ti401', 'Torquímetro Dinamométrico Calibrado', 'Disjuntores Schneider Compact NSX', 'Barramentos de Cobre Eletrolítico'],
    standards: ['NR-10 Básico / SEP', 'NBR 5410', 'Procedimento LOTO'],
    description: {
      pt: 'Varredura infravermelha com termovisor sob pico de carga da edificação (85% da demanda). Identificação de aquecimento em conexões de barramentos principais, reaperto dinâmico com torquímetro calibrado conforme torque do fabricante e redução térmica de 68°C para 34°C com 100% de confiabilidade.',
      en: 'Full infrared thermographic scan under 85% peak facility load. Identified localized thermal anomalies on main copper busbars, performed precision dynamic torquing according to manufacturer specs, reducing connection temps from 68°C to 34°C with zero downtime.',
      es: 'Barrido termográfico infrarrojo bajo 85% de carga máxima. Identificación de puntos calientes en barras de cobre, reapriete dinamométrico calibrado y reducción térmica de 68°C a 34°C con cero cortes.',
    },
    image: 'https://picsum.photos/seed/field-qgbt-thermo/800/600',
    highlight: true,
  },
  {
    id: 'fa_gmg_transferencia',
    title: {
      pt: 'Rotina de Teste com Carga e Manutenção em GMG Cummins 250kVA e UPS',
      en: '250kVA Cummins Diesel Generator & Industrial UPS Load-Transfer Routine',
      es: 'Prueba con Carga y Mantenimiento en GMG Cummins 250kVA y SAI/UPS',
    },
    category: 'generators_ups',
    categoryLabel: {
      pt: 'Grupos Geradores & No-breaks',
      en: 'Generators & UPS',
      es: 'Generadores y SAI/UPS',
    },
    location: 'JLL Serviços de Manutenção Predial',
    date: '2026-07',
    equipment: ['Gerador Cummins 250kVA', 'Controlador DeepSea DSE7320', 'UPS APC Symmetra 40kVA', 'Banco de Baterias VRLA 24Vcc'],
    standards: ['NR-10', 'NR-20', 'NBR 14039', 'Procedimento de Emergência JLL'],
    description: {
      pt: 'Simulação mensal de queda de energia da concessionária para teste da chave de transferência automática (ATS/QTA). Monitoramento da comutação em 7.2 segundos, sustentação 0ms de cargas críticas via UPS dupla conversão e verificação de aquecimento de bloco, óleo lubrificante e densidade do diesel.',
      en: 'Monthly simulated grid outage test for Automatic Transfer Switch (ATS). Monitored 7.2s generator startup and 0ms instantaneous load sustain via double-conversion UPS. Verified block heating (40°C), oil viscosity, and 24Vdc starter battery bank health.',
      es: 'Simulación mensual de corte de red eléctrica para prueba de conmutador ATS. Monitoreo de arranque en 7.2 segundos, sostenimiento de cargas críticas por SAI y verificación de fluidos y baterías.',
    },
    image: 'https://picsum.photos/seed/field-generator-diesel/800/600',
    highlight: true,
  },
  {
    id: 'fa_quadro_bombas',
    title: {
      pt: 'Montagem em Bancada e Instalação de Painel Duplex de Bombas 5CV',
      en: 'Bench Assembly & Commissioning of 5HP Duplex Booster Pump Panel',
      es: 'Montaje en Taller e Instalación de Cuadro Duplex de Bombas 5CV',
    },
    category: 'electrical',
    categoryLabel: {
      pt: 'Comandos Elétricos & Motores',
      en: 'Control Panels & Motors',
      es: 'Cuadros de Mando y Motores',
    },
    location: 'Edgar Santana de França / Facilities',
    date: '2026-06',
    equipment: ['Contatores WEG CWM25', 'Relés Térmicos RW27D', 'Disjuntor Motor MPW25', 'Chaves Boia Eletromecânicas', 'Canaletas Perfuradas'],
    standards: ['NBR 5410', 'NR-10', 'NR-12'],
    description: {
      pt: 'Montagem estruturada de quadro elétrico de comando com relé de alternância automática para duas bombas de recalque de 5CV. Anilhamento numerado de cabos, botoeiras de comando manual/automático, sinalizadores LED de falha térmica e teste funcional em bancada antes da substituição em campo.',
      en: 'Structured wiring and assembly of motor control center featuring automatic alternation relay for dual 5HP water booster pumps. Numbered wire ferruling, manual/auto selector switches, LED trip status lamps, and exhaustive bench simulation before field deployment.',
      es: 'Montaje de cuadro eléctrico con alternancia automática para bombas de agua de 5CV. Identificación numérica de conductores, selectores manual/auto y señalización LED.',
    },
    image: 'https://picsum.photos/seed/field-pump-panel/800/600',
    highlight: true,
  },
  {
    id: 'fa_retrofit_led',
    title: {
      pt: 'Retrofit de 180+ Luminárias LED e Lançamento de Eletrocalhas',
      en: '180+ LED Fixture Retrofit & Galvanized Cable Tray Installation',
      es: 'Retrofit de 180 Luminarias LED y Tendido de Bandejas Metálicas',
    },
    category: 'electrical',
    categoryLabel: {
      pt: 'Instalações & Infraestrutura',
      en: 'Wiring & Infrastructure',
      es: 'Instalaciones e Infraestructura',
    },
    location: 'JLL Serviços de Manutenção Predial',
    date: '2026-05',
    equipment: ['Painéis LED 40W 4000K', 'Cabos Prysmian AFumex 2.5mm²', 'Eletrocalhas Galvanizadas Mopa', 'Andaimes Travados NR-35'],
    standards: ['NR-35', 'NBR 5410', 'NBR 8995-1'],
    description: {
      pt: 'Substituição de luminárias fluorescentes antigas por painéis LED de alta eficiência em 3 andares corporativos. Instalação de 120 metros de eletrocalhas aéreas com linha de vida certificada (NR-35), garantindo redução de 58% no consumo elétrico e aumento do iluminamento para 500 lux homogêneo.',
      en: 'Replaced legacy fluorescent lighting with 40W LED panels across 3 corporate office floors. Installed 120m of overhead cable trays utilizing certified lifelines (NR-35), securing 58% energy savings and uniform 500 lux compliance.',
      es: 'Sustitución de luminarias antiguas por paneles LED en 3 plantas corporativas. Instalación de 120m de bandejas portacables con línea de vida (NR-35), logrando 58% de ahorro energético.',
    },
    image: 'https://picsum.photos/seed/field-led-lighting/800/600',
    highlight: false,
  },
  {
    id: 'fa_valvulas_hidraulicas',
    title: {
      pt: 'Manutenção de Válvulas Redutoras de Pressão (VRP) e Barrilete',
      en: 'Pressure Reducing Valve (PRV) Overhaul & Hydraulic Header Maintenance',
      es: 'Mantenimiento de Válvulas Reductoras de Presión y Colector Hidráulico',
    },
    category: 'hydraulic',
    categoryLabel: {
      pt: 'Hidráulica Predial',
      en: 'Building Hydraulics',
      es: 'Fontanería y Red Hidráulica',
    },
    location: 'ITC Administração e Hotelaria / JLL',
    date: '2026-04',
    equipment: ['Válvulas Pilotadas Bermad 2"', 'Manômetros com Glicerina 0-10 bar', 'Tubulações PPR Termofusão', 'Kits de Vedação e Diafragma'],
    standards: ['NBR 5626', 'Boas Práticas de Engenharia Predial'],
    description: {
      pt: 'Desmontagem técnica de válvulas redutoras de pressão dos andares intermediários para eliminação de golpe de aríete e picos de pressão nas colunas. Substituição de diafragmas de borracha nitrílica, limpeza de filtros piloto e calibração dinâmica para 2.5 bar estável.',
      en: 'Complete overhaul of intermediate-floor water pressure reducing valves to eliminate dangerous water hammer oscillations. Replaced nitrilic diaphragms, cleaned internal pilot strainers, and calibrated dynamic outlet pressure to a solid 2.5 bar.',
      es: 'Desmontaje y mantenimiento de válvulas reductoras para eliminar golpes de ariete. Cambio de membranas de estanqueidad, limpieza de filtros piloto y calibración a 2.5 bar.',
    },
    image: 'https://picsum.photos/seed/field-valves-plumbing/800/600',
    highlight: false,
  },
  {
    id: 'fa_piso_epoxi',
    title: {
      pt: 'Recuperação de Drywall e Aplicação de Piso Epóxi em Sala Técnica',
      en: 'Drywall Repair & High-Durability Technical Epoxy Coating in Substation',
      es: 'Reparación de Drywall y Pintura Epoxi en Sala Técnica',
    },
    category: 'civil_painting',
    categoryLabel: {
      pt: 'Civil & Pintura Técnica',
      en: 'Civil & Technical Coating',
      es: 'Civil y Pintura Epoxi',
    },
    location: 'Concrepoxi Engenharia / JLL Facilities',
    date: '2026-03',
    equipment: ['Resina Epóxi Poliamida 100% Sólidos', 'Nível a Laser Bosch GLL 3-80', 'Placas Drywall Resistentes à Umidade (RU)', 'Lixadeira com Aspirador'],
    standards: ['NR-18', 'Padrão Industrial A+'],
    description: {
      pt: 'Fechamento de passagens de cabos com drywall acústico e fita telada, lixamento e aplicação de fundo selador epóxi seguido de duas demãos de acabamento antiderrapante em sala de geradores e subestação de média tensão, conferindo resistência a óleos e facilidade de descarte e lavagem.',
      en: 'Restored partition walls with moisture-resistant drywall, treated cable penetrations with firestop/joint mesh, and applied high-solids polyamide epoxy flooring in generator rooms, producing an oil-resistant, washable, industrial A+ finish.',
      es: 'Reparación de tabiques de drywall, sellado de pasos de cableado y aplicación de pintura epoxi de alta resistencia en sala de generadores y subestación.',
    },
    image: 'https://picsum.photos/seed/field-epoxy-coating/800/600',
    highlight: false,
  },
  {
    id: 'fa_subestacao_transformador',
    title: {
      pt: 'Manobra e Manutenção Preventiva em Transformador a Seco 500kVA',
      en: '500kVA Dry-Type Transformer Inspection & Medium Voltage Switching',
      es: 'Maniobra y Mantenimiento Preventivo en Transformador Seco 500kVA',
    },
    category: 'electrical',
    categoryLabel: {
      pt: 'Média Tensão & Subestações',
      en: 'Medium Voltage & Substation',
      es: 'Media Tensión y Subestaciones',
    },
    location: 'ATS Serviços Especiais / JLL Facilities',
    date: '2026-02',
    equipment: ['Transformador a Seco 500kVA 13.8kV/380V', 'Vara de Manobra Dielétrica 36kV', 'Detector de Tensão por Contato', 'Luvas Dielétricas Classe 2'],
    standards: ['NR-10 SEP', 'NBR 14039', 'Procedimento de Bloqueio LOTO'],
    description: {
      pt: 'Execução de manobra de desenergização e aterramento temporário sob protocolo de segurança NR-10 SEP. Limpeza com ar comprimido seco dos enrolamentos de média e baixa tensão, reaperto de conexões flexíveis e medição de temperatura dos sensores PT100 no painel de proteção térmica.',
      en: 'De-energization switching and temporary grounding under strict NR-10 SEP high-voltage safety protocol. Performed dry compressed-air cleaning on coils, torque-checked copper terminals, and verified PT100 thermal protection relay sensors on a 500kVA transformer.',
      es: 'Maniobra de desenergización y puesta a tierra temporal según NR-10 SEP. Limpieza de bobinados con aire comprimido seco, reapriete de terminales y verificación de sondas PT100.',
    },
    image: 'https://picsum.photos/seed/field-transformer-substation/800/600',
    highlight: true,
  },
  {
    id: 'fa_fancoil_climatizacao',
    title: {
      pt: 'Manutenção Preventiva em Fancoil 15 TR e Higienização de Filtros',
      en: '15 TR HVAC Fan Coil Unit Preventive Servicing & Filter Replacement',
      es: 'Mantenimiento Preventivo de Fancoil 15 TR y Cambio de Filtros',
    },
    category: 'hydraulic',
    categoryLabel: {
      pt: 'Climatização & Ar-Condicionado',
      en: 'HVAC & Air Conditioning',
      es: 'Climatización y Aire Acondicionado',
    },
    location: 'JLL Serviços de Manutenção Predial',
    date: '2026-01',
    equipment: ['Unidade Fancoil Carrier 15 TR', 'Filtros Descartáveis Classe G4 e Bolsas F7', 'Manifold R410A', 'Bomba de Pressurização de Serpentina'],
    standards: ['PMOC (Plano de Manutenção, Operação e Controle)', 'Normas ANVISA'],
    description: {
      pt: 'Inspeção e higienização química da serpentina com produto biodegradável alcalino, desobstrução da bandeja e dreno de condensado com pastilha bactericida, tensionamento e alinhamento de correias trapezoidais e substituição de filtros de ar G4/F7 em conformidade com o PMOC corporativo.',
      en: 'Coil chemical cleansing with alkaline bio-detergent, condensate drain descaling with bactericidal tablets, V-belt tensioning/pulley alignment, and air filter replacement conforming to corporate PMOC air-quality compliance.',
      es: 'Limpieza química de serpentín, desobstrucción de bandeja de condensados con pastillas bactericidas, ajuste de correas y cambio de filtros según normativa PMOC.',
    },
    image: 'https://picsum.photos/seed/field-hvac-fancoil/800/600',
    highlight: false,
  },
];

export const DEFAULT_PORTFOLIO_DATA: PortfolioDatabase = {
  personalInfo: {
    name: 'Allan Luiz Silveira Lima',
    titlePt: 'Oficial de Manutenção Elétrica, Predial e Ar-Condicionado | Desenvolvedor Full-Stack',
    titleEn: 'Electrical, Building & HVAC Maintenance Officer | Full-Stack Developer',
    titleEs: 'Oficial de Mantenimiento Eléctrico, Edilicio y Climatización | Desarrollador Full-Stack',
    email: 'jallanluiz@gmail.com',
    phone: '(11) 91577-7803',
    whatsappNumber: '5511915777803',
    location: 'São Paulo - SP, Brasil',
    linkedin: 'https://www.linkedin.com/in/allan-ls-lima',
    website: 'https://allan-lima.vercel.app',
    availability: {
      pt: 'Disponível para contratação (CLT/PJ) em Manutenção e Desenvolvimento de Software',
      en: 'Available for employment in Facilities Maintenance & Full-Stack Software Development',
      es: 'Disponible para contratación en Mantenimiento y Desarrollo de Software',
    },
    jllExperience: {
      pt: 'Atuação comprovada na ATS Serviços Especiais e JLL (Jones Lang LaSalle)',
      en: 'Proven track record at ATS Serviços Especiais and JLL (Jones Lang LaSalle)',
      es: 'Experiencia comprobada en ATS Serviços Especiais y JLL (Jones Lang LaSalle)',
    },
    bio: {
      pt: 'Profissional versátil com sólida formação técnica em Eletrotécnica, certificações de segurança atualizadas (NR-10, NR-10 SEP, NR-35, NR-20, NR-12, NR-18, NR-6) e ampla experiência na ATS Serviços Especiais, JLL e hotelaria. Especialista na operação e manutenção preventiva e corretiva de grupos geradores, nobreaks, painéis QGBT, comandos elétricos, sistemas hidráulicos, civil e ar-condicionado. Em paralelo, possui sólida capacitação em Tecnologia da Informação e desenvolvimento full-stack moderno (TypeScript, Next.js, Node.js, bancos de dados e APIs), buscando ativamente oportunidades em ambas as áreas.',
      en: 'Versatile professional with formal education in Electrotechnics, active safety certifications (NR-10, NR-10 SEP, NR-35, NR-20, NR-12, NR-18, NR-6, LOTO), and hands-on track record at ATS Serviços Especiais, JLL (Jones Lang LaSalle) and hospitality. Specialist in preventive and corrective maintenance of diesel generators, UPS systems, QGBT switchboards, motor starters, plumbing, civil repairs, and HVAC. Concurrently skilled in Information Technology and modern full-stack software development (TypeScript, Next.js, Node.js, databases, and APIs), actively seeking opportunities in maintenance and software engineering.',
      es: 'Profesional versátil con formación técnica en Electrotecnia, certificaciones de seguridad al día (NR-10, NR-10 SEP, NR-35, NR-20, NR-12, NR-18, NR-6, LOTO) y experiencia en ATS Serviços Especiais, JLL y hotelería. Especialista en generadores, SAI/UPS, tableros QGBT, mandos de motores, fontanería, obra civil y climatización. Paralelamente, cuenta con sólida capacitación en Tecnología de la Información y desarrollo full-stack moderno, buscando oportunidades en ambas áreas.',
    },
    stats: {
      jllDuration: 'ATS & JLL Facilities',
      uptime: '99.9%',
      panelsMaintained: '60+ QGBT/QDF',
      safetyIncidents: 'Zero Acidentes',
    },
  },
  experiences: [
    {
      id: 'ats',
      role: {
        pt: 'Oficial de Manutenção Predial',
        en: 'Building Maintenance Officer',
        es: 'Oficial de Mantenimiento Edilicio',
      },
      company: 'ATS SERVIÇOS ESPECIAIS LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '04/2026 - Atualmente',
        en: '04/2026 - Present',
        es: '04/2026 - Actualmente',
      },
      duration: {
        pt: 'Emprego Atual / Operação Crítica',
        en: 'Current Role / Critical Operations',
        es: 'Empleo Actual / Operación Crítica',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Responsável por monitorar, operar e manter instalações, circuitos e equipamentos elétricos de média e baixa tensão em localidades designadas.',
        en: 'Responsible for monitoring, operating, and maintaining electrical installations, circuits, and medium/low voltage equipment across designated sites.',
        es: 'Responsable de monitorear, operar y mantener instalaciones, circuitos y equipos eléctricos de media y baja tensión.',
      },
      achievements: {
        pt: [
          'Operação e manutenção de grupos moto-geradores (GMG), nobreaks/UPS industriais e bombas hidráulicas.',
          'Manutenção de painéis de distribuição (QGBT/QDF), comandos elétricos e sistemas de iluminação normal e de emergência.',
          'Operação de chaves estáticas de paralelismo, chaves de transferência (QTA/ATS) entre gerador e rede e transformadores de força.',
          'Execução de rondas periódicas de verificação, tomadas de medidas de consumo e desempenho dos equipamentos.',
          'Acompanhamento técnico de terceiros contratados para execução de serviços de manutenção especializada.',
          'Serviços em eletricidade predial: passagem de fios, caixas de tomada, disjuntores, troca de lâmpadas, troca e manutenção de motores elétricos e troca de filtros.',
          'Apoio em rotinas de manutenção civil, pintura, hidráulica e ar-condicionado.',
          'Montagem de sistemas elétricos de painéis e quadros de comando orientando-se por plantas e diagramas elétricos.',
          'Controle patrimonial de ferramentas e equipamentos e garantia de uso rigoroso de EPIs e EPCs.',
        ],
        en: [
          'Operated and maintained diesel generator sets (GMG), industrial UPS/no-breaks, and hydraulic pumps.',
          'Maintained main low-voltage distribution boards (QGBT), motor control centers, and regular/emergency lighting systems.',
          'Operated static transfer switches, ATS generator-to-grid changeover systems, and power transformers.',
          'Conducted routine equipment inspections, electrical consumption logs, and operational performance tests.',
          'Supervised specialized third-party maintenance contractors during complex overhauls.',
          'Building electrical tasks: wiring conduits, receptacle boxes, breakers, lighting, electric motor overhauls, and filter replacements.',
          'Supported cross-functional building maintenance: civil repairs, painting, plumbing, and air conditioning.',
          'Assembled electrical control panels adhering to engineering blueprints and single-line diagrams.',
        ],
        es: [
          'Operación y mantenimiento de grupos electrógenos, SAI/UPS industriales y bombas hidráulicas.',
          'Mantenimiento de tableros de distribución (QGBT), cuadros de control y sistemas de iluminación de emergencia.',
          'Operación de conmutadores automáticos ATS, llaves estáticas de paralelismo y transformadores de potencia.',
          'Rondas periódicas de inspección, medición de consumos y control de rendimiento de equipos.',
          'Supervisión técnica de empresas terceras contratadas para servicios especializados.',
          'Electricidad edilicia, cableado, cambio de motores, filtros y apoyo en civil, pintura, fontanería y climatización.',
        ],
      },
      skills: [
        'Grupos Geradores (GMG)',
        'No-breaks / UPS',
        'Painéis QGBT & QDF',
        'Comandos Elétricos',
        'Chave de Transferência (ATS)',
        'Transformadores de Força',
        'Ar-Condicionado & Filtros',
        'Bombas Hidráulicas',
        'NR-10 & NR-35',
      ],
    },
    {
      id: 'jll',
      role: {
        pt: 'Oficial de Manutenção (Generalista)',
        en: 'General Maintenance Officer (Facilities)',
        es: 'Oficial de Mantenimiento (Generalista)',
      },
      company: 'JLL SERVIÇOS DE MANUTENÇÃO PREDIAL LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '07/2024 - 08/2025',
        en: '07/2024 - 08/2025',
        es: '07/2024 - 08/2025',
      },
      duration: {
        pt: '1 ano e 1 mês de atuação comprovada',
        en: '1 year and 1 month proven track record',
        es: '1 año y 1 mes de experiencia comprobada',
      },
      type: {
        pt: 'Tempo Integral / Padrão Corporativo A+',
        en: 'Full-time / Corporate Facilities A+',
        es: 'Tiempo Completo / Corporativo A+',
      },
      description: {
        pt: 'Atuação em infraestrutura predial corporativa crítica, executando manutenção preditiva, preventiva e corretiva de sistemas elétricos, mecânicos, hidráulicos e civis.',
        en: 'Executed critical corporate facility operations, performing predictive, preventive and corrective maintenance across electrical, mechanical, plumbing and civil systems.',
        es: 'Mantenimiento de infraestructura corporativa de alto nivel: predictivo, preventivo y correctivo en sistemas eléctricos, mecánicos, hidráulicos y civiles.',
      },
      achievements: {
        pt: [
          'Monitoramento, operação e manutenção de grupos geradores, nobreaks, bombas hidráulicas, painéis de distribuição e comandos elétricos.',
          'Inspeção em sistemas de iluminação de emergência, chaves estáticas em paralelismo, chaves de transferência gerador-rede e transformadores de força (média e baixa tensão).',
          'Rondas periódicas, tomadas de medidas de consumo e desempenho, manutenções preditivas com termografia infravermelha.',
          'Acompanhamento técnico de terceiros para execução de serviços de manutenção especializados.',
          'Manutenções corretivas e preventivas de máquinas e equipamentos conforme cronograma rigoroso.',
          'Serviços em eletricidade predial: passagens de fios, caixas de tomada, disjuntores, lâmpadas LED, motores elétricos e filtros de linha.',
          'Apoio em rotinas de manutenção civil, pintura predial, hidráulica e sistemas de ar-condicionado.',
          'Montagem de sistemas elétricos de painéis e quadros de comandos com base em diagramas elétricos e normas.',
        ],
        en: [
          'Monitored, operated, and maintained diesel generators, industrial UPS, booster pumps, and main distribution panels.',
          'Inspected emergency lighting systems, parallel static switches, automatic transfer switches (ATS), and power transformers.',
          'Executed routine rounds, energy and load measurements, and predictive infrared thermography.',
          'Supervised specialized third-party vendors for heavy equipment maintenance.',
          'Preventive and corrective tasks according to strict operational schedule.',
          'Handled circuit pulling, breakers, LED retrofits, electric motors, and power line filters.',
          'Collaborated on civil maintenance, commercial painting, plumbing repairs, and HVAC systems.',
        ],
        es: [
          'Monitoreo y mantenimiento de grupos electrógenos, SAI, bombas de agua, tableros de distribución y mandos eléctricos.',
          'Inspecciones en sistemas de emergencia, ATS, conmutadores y transformadores de media y baja tensión.',
          'Rondas de verificación, termografía infrarroja y registro de consumos.',
          'Supervisión técnica de proveedores especializados en mantenimiento mayor.',
          'Cableado, disyuntores, luminarias, motores y apoyo en albañilería, pintura, fontanería y climatización.',
        ],
      },
      skills: [
        'Quadros QGBT & QDF',
        'Geradores Cummins',
        'UPS Industriais',
        'Termografia Elétrica',
        'Comandos de Motores',
        'Bombas de Recalque',
        'Ar-Condicionado',
        'Drywall & Pintura',
      ],
    },
    {
      id: 'itc',
      role: {
        pt: 'Auxiliar de Manutenção',
        en: 'Maintenance Assistant',
        es: 'Auxiliar de Mantenimiento',
      },
      company: 'ITC ADMINISTRAÇÃO E HOTELARIA LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '09/2023 - 12/2023',
        en: '09/2023 - 12/2023',
        es: '09/2023 - 12/2023',
      },
      duration: {
        pt: 'Setor Hoteleiro',
        en: 'Hospitality Sector',
        es: 'Sector Hotelero',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Manutenção preventiva e corretiva de elétrica, hidráulica e ar-condicionado em ambiente de hotelaria de alto fluxo.',
        en: 'Preventive and corrective maintenance of electrical, plumbing and air conditioning systems in high-traffic hospitality operations.',
        es: 'Mantenimiento preventivo y correctivo de electricidad, fontanería y aire acondicionado en entorno hotelero.',
      },
      achievements: {
        pt: [
          'Execução ágil de reparos elétricos, substituição de componentes danificados e iluminação.',
          'Desobstrução e reparo em redes hidráulicas, torneiras, registros e válvulas de descarga.',
          'Limpeza de filtros, desobstrução de drenos e suporte em sistemas de climatização.',
        ],
        en: [
          'Rapid execution of electrical repairs, fixture replacements and lighting maintenance.',
          'Plumbing unclogging and maintenance of valves, faucets, and supply piping.',
          'Cleaning air filters, drain unclogging, and HVAC unit support.',
        ],
        es: [
          'Reparaciones eléctricas rápidas y sustitución de luminarias.',
          'Mantenimiento de tuberías, grifos y válvulas de descarga.',
          'Limpieza de filtros y mantenimiento básico de aire acondicionado.',
        ],
      },
      skills: ['Manutenção Hoteleira', 'Elétrica Predial', 'Hidráulica', 'Ar-Condicionado'],
    },
    {
      id: 'edgar_santana',
      role: {
        pt: 'Eletricista de Instalações',
        en: 'Installation Electrician',
        es: 'Electricista de Instalaciones',
      },
      company: 'EDGAR SANTANA DE FRANCA INSTALACOES ELETRICAS',
      location: 'São Paulo - SP',
      period: {
        pt: '04/2023 - 08/2023',
        en: '04/2023 - 08/2023',
        es: '04/2023 - 08/2023',
      },
      duration: {
        pt: 'Serviços Especializados de Elétrica',
        en: 'Specialized Electrical Contracting',
        es: 'Servicios Eléctricos Especializados',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Montar, ajustar, instalar, manter e reparar aparelhos e equipamentos elétricos diversos.',
        en: 'Assembled, adjusted, installed, maintained and repaired diverse electrical machines and devices.',
        es: 'Montaje, ajuste, instalación, mantenimiento y reparación de aparatos y equipos eléctricos.',
      },
      achievements: {
        pt: [
          'Manutenção e instalação de motores elétricos, dínamos e instrumentos de medição.',
          'Instalação de transmissores e receptores de sinais e equipamentos de informática.',
          'Ajuste e calibração de aparelhos de controle e regulagem de corrente elétrica.',
        ],
        en: [
          'Installed and repaired electric motors, dynamos, and measurement instruments.',
          'Connected signal transmitters, receivers, and auxiliary electrical gear.',
          'Adjusted and calibrated current regulation and control devices.',
        ],
        es: [
          'Instalación y reparación de motores eléctricos e instrumentos de medida.',
          'Conexión de equipos transmisores y aparatos auxiliares.',
          'Regulación y ajuste de corriente en dispositivos de control.',
        ],
      },
      skills: ['Motores Elétricos', 'Instrumentação', 'Regulagem de Corrente', 'Instalações'],
    },
    {
      id: 'jcs_instalacoes',
      role: {
        pt: 'Almoxarife Técnico / Apoio de Instalações',
        en: 'Technical Inventory & Installation Support',
        es: 'Encargado Técnico de Almacén e Instalaciones',
      },
      company: 'JCS INSTALAÇÕES HIDRÁULICAS E ELÉTRICAS LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '09/2021 - 01/2022',
        en: '09/2021 - 01/2022',
        es: '09/2021 - 01/2022',
      },
      duration: {
        pt: 'Instalações Hidráulicas e Elétricas',
        en: 'Hydraulic & Electrical Contracting',
        es: 'Instalaciones Hidráulicas y Eléctricas',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Controle, recebimento, conferência técnica e organização de materiais elétricos e hidráulicos para obras de infraestrutura.',
        en: 'Controlled, inspected, and organized technical electrical and hydraulic supplies for infrastructure sites.',
        es: 'Control técnico, recepción y organización de suministros eléctricos e hidráulicos para obras.',
      },
      achievements: {
        pt: [
          'Gestão de estoque técnico de cabos, disjuntores, conexões PPR/PVC e ferramentas especializadas.',
          'Separação e despacho de kits de montagem para equipes de campo com zero retrabalho.',
          'Conferência de notas fiscais e especificações técnicas de materiais conforme NBR.',
        ],
        en: [
          'Managed technical inventory of cables, breakers, PPR/PVC fittings, and specialized tools.',
          'Dispatched installation kits to field teams ensuring zero downtime or missing components.',
          'Inspected incoming supplies against technical specs and national standards.',
        ],
        es: [
          'Gestión de stock técnico de cables, disyuntores, fontanería y herramientas.',
          'Preparación y despacho de materiales para cuadrillas de campo.',
          'Verificación de especificaciones técnicas y albaranes.',
        ],
      },
      skills: ['Almoxarifado Técnico', 'Materiais Elétricos', 'Conexões Hidráulicas', 'Logística de Obras'],
    },
    {
      id: 'concrepoxi',
      role: {
        pt: 'Apoio de Infraestrutura & Revestimento Epóxi',
        en: 'Infrastructure Support & Epoxy Floor Coating',
        es: 'Auxiliar de Infraestructura y Revestimientos Epoxi',
      },
      company: 'CONCREPOXI ENGENHARIA LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '08/2020 - 09/2021',
        en: '08/2020 - 09/2021',
        es: '08/2020 - 09/2021',
      },
      duration: {
        pt: '1 ano e 1 mês',
        en: '1 year and 1 month',
        es: '1 año y 1 mes',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Atuação em obras industriais com preparação de substratos, nivelamento e aplicação de revestimentos epóxi e poliuretano de alta resistência.',
        en: 'Executed industrial floor coating projects, substrate preparation, laser leveling, and high-durability epoxy/polyurethane resin application.',
        es: 'Preparación de superficies, nivelación y aplicación de revestimientos epoxi y poliuretano industrial.',
      },
      achievements: {
        pt: [
          'Preparação mecânica de pisos de concreto (lixamento, fresagem e aspiração industrial).',
          'Aplicação de primers seladores e acabamentos autonivelantes em salas técnicas e indústrias.',
          'Tratamento de juntas de dilatação estruturais e impermeabilização técnica.',
        ],
        en: [
          'Mechanical concrete surface preparation (grinding, profiling, and industrial dust extraction).',
          'Applied epoxy primers and self-leveling finishes in technical rooms and industrial plants.',
          'Treated expansion joints and applied structural technical waterproofing.',
        ],
        es: [
          'Preparación mecánica de suelos de hormigón (fresado, pulido y aspiración).',
          'Aplicación de imprimaciones epoxi y acabados autonivelantes.',
          'Tratamiento de juntas de dilatación e impermeabilización.',
        ],
      },
      skills: ['Pintura Epóxi', 'Pisos Industriais', 'Juntas de Dilatação', 'Segurança NR-18'],
    },
    {
      id: 'capanema_moveis',
      role: {
        pt: 'Auxiliar de Montagem e Produção',
        en: 'Assembly & Production Assistant',
        es: 'Auxiliar de Montaje y Producción',
      },
      company: 'CAPANEMA MÓVEIS LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '06/2016 - 02/2018',
        en: '06/2016 - 02/2018',
        es: '06/2016 - 02/2018',
      },
      duration: {
        pt: '1 ano e 8 meses',
        en: '1 year and 8 months',
        es: '1 año y 8 meses',
      },
      type: {
        pt: 'Tempo Integral',
        en: 'Full-time',
        es: 'Tiempo Completo',
      },
      description: {
        pt: 'Montagem de estruturas de mobiliário corporativo e residencial, manuseio de ferramentas elétricas manuais e controle de acabamento.',
        en: 'Assembly of corporate and residential furniture structures, operation of power tools, and finish quality control.',
        es: 'Montaje de mobiliario corporativo y residencial, manejo de herramientas eléctricas y control de acabados.',
      },
      achievements: {
        pt: [
          'Operação segura de ferramentas elétricas manuais (parafusadeiras, furadeiras e serras).',
          'Leitura de plantas de montagem e controle dimensional com precisão milimétrica.',
        ],
        en: [
          'Safe operation of handheld power tools (drills, impact drivers, precision saws).',
          'Read furniture blueprints with precise dimensional tolerances.',
        ],
        es: [
          'Uso seguro de herramientas eléctricas (atornilladores, taladros).',
          'Interpretación de planos de montaje.',
        ],
      },
      skills: ['Ferramental Elétrico', 'Montagem Estrutural', 'Leitura de Projetos'],
    },
    {
      id: 'madam_mad',
      role: {
        pt: 'Auxiliar de Logística e Cargas',
        en: 'Logistics & Cargo Assistant',
        es: 'Auxiliar de Logística y Cargas',
      },
      company: 'MADAM MAD TRANSPORTES LTDA.',
      location: 'São Paulo - SP',
      period: {
        pt: '01/2016 - 02/2016',
        en: '01/2016 - 02/2016',
        es: '01/2016 - 02/2016',
      },
      duration: {
        pt: 'Operação Logística',
        en: 'Logistics Operations',
        es: 'Operación Logística',
      },
      type: {
        pt: 'Temporário',
        en: 'Temporary',
        es: 'Temporal',
      },
      description: {
        pt: 'Apoio em carga, descarga e conferência de mercadorias no centro de distribuição.',
        en: 'Assisted with cargo loading, unloading, and shipping manifest inspections in distribution center.',
        es: 'Apoyo en carga, descarga y verificación de mercancías en centro de distribución.',
      },
      achievements: {
        pt: [
          'Conferência física de volumes e organização de paletes de transporte.',
          'Cumprimento rigoroso de normas de ergonomia e segurança patrimonial.',
        ],
        en: [
          'Physical freight verification and transport pallet staging.',
          'Strict adherence to ergonomics and warehouse safety protocols.',
        ],
        es: [
          'Verificación de mercancías y organización de palets.',
          'Normas de seguridad y ergonomía en almacén.',
        ],
      },
      skills: ['Logística', 'Organização de Cargas', 'Ergonomia'],
    },
  ],
  projects: PROJECTS,
  fieldActivities: DEFAULT_FIELD_ACTIVITIES,
  skillsMatrix: [
    {
      id: 'fullstack_software',
      title: {
        pt: 'Desenvolvimento Full-Stack & TI',
        en: 'Full-Stack Software & IT Development',
        es: 'Desarrollo de Software Full-Stack y TI',
      },
      skills: [
        { name: 'TypeScript & JavaScript Moderno (ES6+)', level: 92, experienceYears: 'Projetos Práticos', highlight: true },
        { name: 'Next.js (App Router, SSR, Server Actions)', level: 90, experienceYears: 'Projetos Práticos', highlight: true },
        { name: 'React & Componentização UI (Tailwind CSS)', level: 94, experienceYears: 'Projetos Práticos', highlight: true },
        { name: 'Node.js, Express & REST APIs', level: 88, experienceYears: 'Projetos Práticos' },
        { name: 'Bancos de Dados (PostgreSQL, Firestore, SQL)', level: 86, experienceYears: 'Projetos Práticos' },
        { name: 'Git, GitHub, CI/CD & Clean Architecture', level: 90, experienceYears: 'Projetos Práticos', highlight: true },
      ],
    },
    {
      id: 'electrical_power',
      title: {
        pt: 'Elétrica de Potência & Painéis',
        en: 'Electrical Power & Switchboards',
        es: 'Potencia Eléctrica y Cuadros',
      },
      skills: [
        { name: 'Quadros Gerais de Baixa Tensão (QGBT)', level: 95, experienceYears: '3+ anos', highlight: true },
        { name: 'Grupos Moto-Geradores (GMG Diesel)', level: 90, experienceYears: '1+ ano JLL', highlight: true },
        { name: 'Sistemas No-Break / UPS & Baterias', level: 88, experienceYears: '1+ ano JLL', highlight: true },
        { name: 'Chaves de Transferência (ATS / QTA)', level: 85, experienceYears: '2+ anos' },
        { name: 'Balanceamento de Fases & Cargas', level: 92, experienceYears: '3+ anos' },
        { name: 'Comandos Elétricos e Partida de Motores', level: 90, experienceYears: '3+ anos' },
      ],
    },
    {
      id: 'predictive_testing',
      title: {
        pt: 'Manutenção Preditiva & Diagnóstico',
        en: 'Predictive Maintenance & Testing',
        es: 'Mantenimiento Predictivo y Ensayos',
      },
      skills: [
        { name: 'Termografia Infravermelha (Fluke)', level: 92, experienceYears: '2+ anos', highlight: true },
        { name: 'Medição de Resistência de Isolamento (Megômetro)', level: 88, experienceYears: '2+ anos' },
        { name: 'Cálculo e Análise de Queda de Tensão (NBR 5410)', level: 95, experienceYears: '3+ anos', highlight: true },
        { name: 'Medição de Impedância em Baterias VRLA', level: 85, experienceYears: '1+ ano JLL' },
        { name: 'Análise de Continuidade e Aterramento', level: 90, experienceYears: '3+ anos' },
      ],
    },
    {
      id: 'infrastructure_facilities',
      title: {
        pt: 'Infraestrutura & Manutenção Geral',
        en: 'Infrastructure & General Facilities',
        es: 'Infraestructura y Mantenimiento General',
      },
      skills: [
        { name: 'Lançamento de Cabos & Eletrocalhas', level: 95, experienceYears: '3+ anos', highlight: true },
        { name: 'Bombas de Recalque & Hidráulica Predial', level: 85, experienceYears: '1+ ano JLL' },
        { name: 'Sistemas CMMS & Gestão de Ordens de Serviço', level: 92, experienceYears: '1+ ano JLL' },
        { name: 'Reparos em Drywall, Pisos e Vedações', level: 88, experienceYears: '2+ anos' },
        { name: 'Pintura Técnica & Aplicação Epóxi', level: 85, experienceYears: '2+ anos' },
      ],
    },
  ],
  certifications: [
    {
      id: 'nr10_sep',
      name: 'NR-10 Básico e SEP (Sistema Elétrico de Potência)',
      code: 'NR-10 / SEP (10.000V+)',
      authority: 'ASTAR Centro de Treinamento (02/2026)',
      validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
      description: {
        pt: 'Habilitação completa para intervenções seguras em baixa, média e alta tensão, desenergização, bloqueio LOTO, aterramento temporário e EPIs/EPCs dielétricos.',
        en: 'Complete qualification for safe interventions in low, medium and high voltage, de-energization, LOTO lockout, temporary grounding, and certified dielectric PPE.',
        es: 'Habilitación integral para maniobras seguras en baja, media y alta tensión, bloqueo LOTO, puesta a tierra y EPIs dieléctricos.',
      },
      iconName: 'ShieldAlert',
    },
    {
      id: 'nr35',
      name: 'NR-35 - Trabalho em Altura',
      code: 'NR-35',
      authority: 'ASTAR Centro de Treinamento (02/2026)',
      validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
      description: {
        pt: 'Capacitação para execução de serviços de infraestrutura elétrica e civil em altura superior a 2 metros, ancoragem, linhas de vida e inspeção de talabartes.',
        en: 'Trained for high-altitude electrical and civil infrastructure repairs above 2m, anchor point calculation, lifelines, and harness inspection.',
        es: 'Capacitación para tareas eléctricas y civiles a más de 2 metros de altura, anclajes y uso de arnés de seguridad.',
      },
      iconName: 'Building',
    },
    {
      id: 'nr20',
      name: 'NR-20 - Segurança com Inflamáveis e Combustíveis',
      code: 'NR-20',
      authority: 'Instituto Nova NR (30/07/2024)',
      validity: { pt: 'Certificação Habilitada', en: 'Certified & Active', es: 'Certificado y Activo' },
      description: {
        pt: 'Procedimentos seguros para abastecimento, tanques de diesel de grupos geradores (GMG) e manuseio de inflamáveis.',
        en: 'Safety procedures for fuel handling, diesel generator storage tanks and flammable liquids management.',
        es: 'Procedimientos seguros para tanques de diésel de grupos electrógenos y manejo de inflamables.',
      },
      iconName: 'Flame',
    },
    {
      id: 'nr18',
      name: 'NR-18 - Condições e Meio Ambiente na Indústria da Construção',
      code: 'NR-18',
      authority: 'ASTAR Centro de Treinamento (02/2026)',
      validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
      description: {
        pt: 'Segurança em canteiros de obras, reformas prediais, andaimes, proteções coletivas e sinalização de riscos.',
        en: 'Safety across building renovation sites, scaffolding, collective protective barriers, and hazard signaling.',
        es: 'Seguridad en reformas edilicias, andamios, protecciones colectivas y señalización.',
      },
      iconName: 'HardHat',
    },
    {
      id: 'nr12',
      name: 'NR-12 - Operação Segura de Máquinas e Equipamentos',
      code: 'NR-12',
      authority: 'ASTAR Centro de Treinamento (02/2026)',
      validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
      description: {
        pt: 'Prevenção de acidentes na operação de máquinas, bombas de recalque, motores elétricos, ferramentas elétricas e proteções mecânicas.',
        en: 'Safe operation of machinery, booster pumps, electric motors, power tools and mechanical guards.',
        es: 'Operación segura de bombas, motores eléctricos, herramientas y resguardos de protección.',
      },
      iconName: 'Cog',
    },
    {
      id: 'nr6',
      name: 'NR-6 - Equipamentos de Proteção Individual (EPI)',
      code: 'NR-6',
      authority: 'ASTAR Centro de Treinamento (02/2026)',
      validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
      description: {
        pt: 'Uso, inspeção, higienização e guarda de EPIs dielétricos, capacetes com jugular, óculos, luvas de alta tensão e calçados com isolamento.',
        en: 'Inspection, proper usage, and maintenance of dielectric PPE, safety helmets, arc flash shields and high-voltage gloves.',
        es: 'Uso, inspección y mantenimiento de EPIs dieléctricos, cascos, gafas y guantes de alta tensión.',
      },
      iconName: 'Shield',
    },
    {
      id: 'loto',
      name: 'LOTO - Lockout & Tagout (Bloqueio de Energias Perigosas)',
      code: 'Procedimento Operacional',
      authority: 'Padrão Internacional de Facilities',
      validity: { pt: 'Procedimento Obrigatório', en: 'Standard Operating Procedure', es: 'Procedimiento Estándar' },
      description: {
        pt: 'Aplicação de cadeados, garras de bloqueio e etiquetas de aviso antes de qualquer manutenção preventiva ou corretiva.',
        en: 'Application of safety padlocks, multi-lock hasps, and warning tags before executing any preventive or corrective task.',
        es: 'Aplicación de candados y etiquetas de advertencia antes de cualquier maniobra preventiva o correctiva.',
      },
      iconName: 'Lock',
    },
    {
      id: 'eletrotecnica',
      name: 'Habilitação Técnica em Eletrotécnica',
      code: 'CFT / CRT',
      authority: 'Formação Técnica Profissionalizante',
      validity: { pt: 'Formação Concluída', en: 'Technical Degree', es: 'Título Técnico' },
      description: {
        pt: 'Projetos elétricos, cálculos de demanda, dimensionamento de condutores, diagramas unifilares, motores, transformadores e comandos lógicos.',
        en: 'Electrical design, load demand calculations, wire sizing, single-line diagrams, transformers, and industrial motor control.',
        es: 'Diseño eléctrico, cálculo de cargas, dimensionamiento de conductores, diagramas unifilares y control de motores.',
      },
      iconName: 'Zap',
    },
  ],
  blogPosts: [
    {
      id: 'post-1',
      title: {
        pt: 'Boas Práticas de Termografia Preventiva em QGBT de Grande Porte',
        en: 'Best Practices for Predictive Thermography on Large-Scale Switchboards',
        es: 'Buenas Prácticas de Termografía Preventiva en Tableros QGBT',
      },
      slug: 'boas-praticas-termografia-qgbt',
      category: 'case_study',
      categoryLabel: {
        pt: 'Estudo de Caso Prático',
        en: 'Case Study',
        es: 'Estudio de Caso',
      },
      date: '2026-08-15',
      readTime: '4 min',
      summary: {
        pt: 'Como a emissividade, carga do circuito e reflexos afetam o diagnóstico infravermelho de conexões elétricas e como padronizar o relatório técnico.',
        en: 'How emissivity, circuit loading, and reflections affect infrared diagnosis on electrical connections and how to standardize technical reporting.',
        es: 'Cómo influyen la emisividad y la carga en el diagnóstico infrarrojo de conexiones eléctricas.',
      },
      content: {
        pt: `A inspeção termográfica em Quadros Gerais de Baixa Tensão (QGBT) é uma das ferramentas preditivas mais eficazes na prevenção de paradas não programadas em Facilities de alto padrão.

### 1. Critério de Carga Mínima
Para que um ponto quente se manifeste termicamente com clareza, o circuito sob análise deve estar operando com pelo menos **40% a 50% de sua carga nominal**. Inspecionar barramentos em vazio pode mascarar conexões frouxas ou oxidadas.

### 2. Emissividade e Superfícies Metálicas
O cobre polido possui emissividade muito baixa (~0.05), refletindo a radiação do ambiente ao invés de sua temperatura real. Recomenda-se aplicar fita isolante fosca de alta temperatura ou pintar uma pequena área de referência com tinta preta fosca (emissividade ~0.95).

### 3. Matriz de Severidade ΔT
- **ΔT < 10°C:** Atenção leve; programar reaperto na próxima preventiva.
- **ΔT entre 10°C e 25°C:** Severidade média; providenciar intervenção em até 7 dias.
- **ΔT > 25°C:** Risco iminente de fusão ou princípio de incêndio; intervenção imediata sob protocolo LOTO.

Seguindo este protocolo rigorosamente na rotina JLL, asseguramos zero paradas elétricas não planejadas.`,
        en: `Thermographic inspection on Low Voltage Main Distribution Boards (QGBT) is one of the most effective predictive tools to prevent unscheduled outages in high-standard facilities.

Key guidelines include checking circuits under minimum 40% load, calibrating emissivity on polished copper, and applying standard ΔT severity matrices.`,
        es: `La inspección termográfica en tableros QGBT es fundamental para prevenir paradas imprevistas en instalaciones corporativas.`,
      },
      tags: ['Termografia', 'QGBT', 'Preditiva', 'Segurança', 'JLL'],
      equipment: ['Câmera Fluke Ti401', 'Torquímetro', 'EPI Dielétrico'],
      published: true,
    },
    {
      id: 'post-2',
      title: {
        pt: 'Guia de Manutenção Preventiva em Grupos Moto-Geradores (GMG)',
        en: 'Preventive Maintenance Routine Guide for Diesel Generator Sets',
        es: 'Guía de Mantenimiento Preventivo en Grupos Electrógenos',
      },
      slug: 'guia-manutencao-gmg-diesel',
      category: 'preventive_routine',
      categoryLabel: {
        pt: 'Rotina Preventiva',
        en: 'Preventive Routine',
        es: 'Rutina Preventiva',
      },
      date: '2026-08-02',
      readTime: '5 min',
      summary: {
        pt: 'Checklist passo a passo para testes semanais, verificação de baterias de partida, sistema de arrefecimento e transferência de carga em ATS.',
        en: 'Step-by-step checklist for weekly inspections, starter batteries, cooling fluid, and ATS load transfer simulation.',
        es: 'Checklist paso a paso para pruebas de grupos electrógenos y conmutación ATS.',
      },
      content: {
        pt: `Os grupos moto-geradores constituem a espinha dorsal de emergência de qualquer infraestrutura crítica corporativa.

### Checklist Semanal Essencial:
1. **Nível de Óleo Lubrificante:** Medição na vareta com motor frio; inspeção visual de viscosidade e contaminação.
2. **Líquido de Arrefecimento:** Verificar nível e concentração de aditivo etilenoglicol; checar termostato de pré-aquecimento (bloco deve estar morno ao toque, ~40°C).
3. **Baterias de Partida 24Vcc:** Medição da tensão de flutuação no carregador (~27.2V) e inspeção de sulfatação nos bornes.
4. **Filtro Racor / Sedimentador:** Drenagem de água condensada no fundo do copo de vidro.
5. **Teste de Partida Manual:** Operação em vazio por 10 minutos para circulação de fluidos e lubrificação do virabrequim.

Executar este roteiro com disciplina é o que garante a disponibilidade de 99.9% de energia ininterrupta.`,
        en: `Generator sets are the backbone of critical facilities. This guide details weekly checks on lubricants, coolant, starter batteries, and fuel filters.`,
        es: `Guía práctica para el mantenimiento preventivo semanal y mensual de generadores diésel corporativos.`,
      },
      tags: ['Gerador', 'GMG', 'Emergência', 'Diesel', 'Facilities'],
      equipment: ['Cummins/Stemac 250kVA', 'Multímetro Fluke', 'Densitômetro'],
      published: true,
    },
    {
      id: 'post-3',
      title: {
        pt: 'Aplicação Rigorosa de Procedimentos LOTO em Manutenções Prediais',
        en: 'Strict LOTO (Lockout/Tagout) Execution in Building Maintenance',
        es: 'Aplicación Rigurosa de Procedimientos LOTO en Mantenimiento',
      },
      slug: 'aplicacao-loto-manutencao-predial',
      category: 'technical_norm',
      categoryLabel: {
        pt: 'Segurança & NR-10',
        en: 'Safety & Standards',
        es: 'Seguridad y Normas',
      },
      date: '2026-07-20',
      readTime: '3 min',
      summary: {
        pt: 'Como estruturar o bloqueio mecânico e elétrico antes de qualquer intervenção, eliminando 100% dos riscos de energização acidental.',
        en: 'How to structure physical mechanical and electrical lockout before interventions, eliminating 100% of accidental re-energization hazards.',
        es: 'Procedimiento de bloqueo físico y señalización para cero accidentes en baja y media tensión.',
      },
      content: {
        pt: `A segurança pessoal e de equipe é a prioridade absoluta em qualquer trabalho elétrico.

O protocolo LOTO segue os 5 passos obrigatórios:
1. **Notificação:** Avisar a operação do prédio e clientes impactados.
2. **Desligamento Controlado:** Desligar a carga antes de manobrar o disjuntor de entrada.
3. **Bloqueio Físico:** Inserir garra múltipla e cadeado pessoal de segurança no manípulo do disjuntor.
4. **Etiquetagem:** Fixar cartão de identificação com nome do oficial responsável, data, telefone e motivo do bloqueio.
5. **Teste de Ausência de Tensão:** Utilizar detector de tensão comprovado antes e depois do teste.

Zero acidentes não é sorte; é método.`,
        en: `Safety is the top priority. Follow the 5 core LOTO steps: notify, controlled shutdown, lockout hasp, tag, and voltage absence testing.`,
        es: `El protocolo LOTO garantiza la desenergización completa y previene accidentes durante maniobras.`,
      },
      tags: ['LOTO', 'NR-10', 'Segurança', 'EPI', 'Zero Acidentes'],
      equipment: ['Kit Master Lock LOTO', 'Detector de Tensão Fluke', 'Luvas Dielétricas'],
      published: true,
    },
  ],
  education: EDUCATION,
  references: PROFESSIONAL_REFERENCES,
  lastUpdated: '2026-08-24T16:20:00Z',
};

// Client-side helper to get current data (with localStorage override for admin updates)
export const LOCAL_STORAGE_KEY = 'allan_luiz_portfolio_data_v3';
export const ADMIN_AUTH_TOKEN_KEY = 'allan_portfolio_admin_token';

export function getPortfolioData(): PortfolioDatabase {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...DEFAULT_PORTFOLIO_DATA,
          ...parsed,
          fieldActivities: parsed.fieldActivities && parsed.fieldActivities.length > 0 ? parsed.fieldActivities : DEFAULT_PORTFOLIO_DATA.fieldActivities,
          projects: parsed.projects && parsed.projects.length > 0 ? parsed.projects : DEFAULT_PORTFOLIO_DATA.projects,
          experiences: parsed.experiences && parsed.experiences.length > 0 ? parsed.experiences : DEFAULT_PORTFOLIO_DATA.experiences,
          certifications: parsed.certifications && parsed.certifications.length > 0 ? parsed.certifications : DEFAULT_PORTFOLIO_DATA.certifications,
          skillsMatrix: parsed.skillsMatrix && parsed.skillsMatrix.length > 0 ? parsed.skillsMatrix : DEFAULT_PORTFOLIO_DATA.skillsMatrix,
          education: parsed.education && parsed.education.length > 0 ? parsed.education : DEFAULT_PORTFOLIO_DATA.education,
          references: parsed.references && parsed.references.length > 0 ? parsed.references : DEFAULT_PORTFOLIO_DATA.references,
        };
      }
    } catch (e) {
      console.warn('Error reading portfolio data from local cache:', e);
    }
  }
  return DEFAULT_PORTFOLIO_DATA;
}

export function savePortfolioData(data: PortfolioDatabase): void {
  if (typeof window !== 'undefined') {
    try {
      data.lastUpdated = new Date().toISOString();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      // Dispatch custom event for immediate reactive re-renders across components
      window.dispatchEvent(new Event('portfolio-data-updated'));

      // Also persist asynchronously to Firebase Firestore cloud database
      import('./firebase').then(({ savePortfolioToFirestore }) => {
        savePortfolioToFirestore(data).catch((err) => {
          console.warn('Firestore cloud sync notice:', err);
        });
      }).catch((err) => {
        console.warn('Could not load Firebase module for sync:', err);
      });
    } catch (e) {
      console.error('Error saving portfolio data to local cache:', e);
    }
  }
}
