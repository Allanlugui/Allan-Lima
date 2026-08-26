export type Language = 'pt' | 'en' | 'es';

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
  image: string;
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

export interface EducationItem {
  id: string;
  degree: Record<Language, string>;
  institution: string;
  year: string;
  description: Record<Language, string>;
  topics: Record<Language, string[]>;
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

export interface ProfessionalReferenceItem {
  id: string;
  name: string;
  role: Record<Language, string>;
  company: string;
  phone: string;
  whatsappNumber: string;
  relationship: Record<Language, string>;
  note: Record<Language, string>;
}

export const PERSONAL_INFO = {
  name: 'Allan Luiz Silveira Lima',
  titlePt: 'Eletricista & Oficial de Manutenção Geral | Desenvolvedor Full-Stack',
  titleEn: 'Electrician & General Maintenance Officer | Full-Stack Developer',
  titleEs: 'Electricista y Oficial de Mantenimiento General | Desarrollador Full-Stack',
  email: 'jallanluiz@gmail.com',
  phone: '(11) 91577-7803',
  whatsappNumber: '5511915777803',
  address: 'Rua José de Barros Magaldi, 1557, Jardim São João, CEP 05815-010, São Paulo - SP',
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
    pt: 'Eletricista e Oficial de Manutenção (Generalista) com formação em Eletricista Instalador Residencial, sólidas certificações em Normas Regulamentadoras (NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12, NR-6) e ampla experiência na ATS Serviços Especiais, JLL e hotelaria. Especialista na operação e manutenção preventiva e corretiva de grupos geradores, nobreaks, painéis QGBT, comandos elétricos, sistemas hidráulicos, civil e ar-condicionado. Em paralelo, possui sólida capacitação em Tecnologia da Informação e desenvolvimento full-stack moderno (TypeScript, Next.js, Node.js, bancos de dados e APIs), buscando ativamente oportunidades em ambas as áreas.',
    en: 'Electrician & General Maintenance Officer with certification as Residential Electrical Installer, active safety and regulatory certifications (NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12, NR-6, LOTO), and hands-on track record at ATS Serviços Especiais, JLL (Jones Lang LaSalle) and hospitality. Specialist in preventive and corrective maintenance of diesel generators, UPS systems, QGBT switchboards, motor starters, plumbing, civil repairs, and HVAC. Concurrently skilled in Information Technology and modern full-stack software development (TypeScript, Next.js, Node.js, databases, and APIs), actively seeking opportunities in maintenance and software engineering.',
    es: 'Electricista y Oficial de Mantenimiento General con formación como Electricista Instalador Residencial, certificaciones de seguridad y normativas al día (NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12, NR-6, LOTO) y experiencia en ATS Serviços Especiais, JLL y hotelería. Especialista en generadores, SAI/UPS, tableros QGBT, mandos de motores, fontanería, obra civil y climatización. Paralelamente, cuenta con sólida capacitación en Tecnología de la Información y desarrollo full-stack moderno, buscando oportunidades en ambas áreas.',
  }
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'nr10_sep',
    name: 'NR-10 SEP - Sistema Elétrico de Potência e Proximidades',
    code: 'NR-10 SEP',
    authority: 'Instituto Nova NR (24/07/2024 - 29/07/2024)',
    validity: { pt: 'Certificação Habilitada', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Habilitação para intervenções em alta e média tensão, transformadores de força, subestações, bloqueio LOTO, aterramento e medidas de proteção coletiva e individual.',
      en: 'Qualified for medium and high voltage power systems, power transformers, substations, LOTO lockout, grounding and high-voltage safety.',
      es: 'Habilitación para sistemas de media y alta potencia, transformadores, subestaciones y bloqueo LOTO.',
    },
    iconName: 'ShieldAlert',
  },
  {
    id: 'nr10',
    name: 'NR-10 - Segurança em Instalações e Serviços em Eletricidade',
    code: 'NR-10 Básico',
    authority: 'Instituto Nova NR (18/07/2024 - 23/07/2024)',
    validity: { pt: 'Certificação Habilitada', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Segurança em baixa e média tensão, desenergização, bloqueio LOTO, proteção contra arcos elétricos e EPIs/EPCs dielétricos.',
      en: 'Low/medium voltage electrical safety, de-energization, LOTO protocols, arc flash protection and dielectric PPE/EPC.',
      es: 'Seguridad en baja y media tensión, desenergización, bloqueo LOTO y EPIs dieléctricos.',
    },
    iconName: 'Zap',
  },
  {
    id: 'nr35',
    name: 'NR-35 - Segurança no Trabalho em Altura',
    code: 'NR-35',
    authority: 'Centro de Treinamento ASTAR (02/2026)',
    validity: { pt: 'Reciclagem Recente (2026)', en: 'Up to date (2026)', es: 'Actualizado (2026)' },
    description: {
      pt: 'Capacitação para trabalhos em altura superior a 2m, linhas de vida, ancoragem, inspeção de cintos tipo paraquedista e plataformas elevatórias.',
      en: 'Working at heights above 2m, lifelines, certified anchor points, harness inspections, and aerial platform safety.',
      es: 'Trabajo seguro en altura superior a 2m, líneas de vida, puntos de anclaje y uso de arnés.',
    },
    iconName: 'Building',
  },
  {
    id: 'nr20',
    name: 'NR-20 - Segurança e Saúde com Inflamáveis e Combustíveis',
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
    name: 'NR-18 - Condições e Meio Ambiente de Trabalho na Indústria da Construção',
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
    authority: 'Centro de Treinamento ASTAR (02/2026)',
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
    authority: 'Centro de Treinamento ASTAR (02/2026)',
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
      pt: 'Desenergização, teste de ausência de tensão, bloqueio mecânico com cadeados/garras e sinalização personalizada antes de qualquer intervenção.',
      en: 'Zero-energy state verification, mechanical padlocks, hasps, and warning tags applied prior to any maintenance.',
      es: 'Desenergización, prueba de tensión cero, bloqueo con candados y señalización previa a intervenciones.',
    },
    iconName: 'Lock',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
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
    id: 'jcs',
    role: {
      pt: 'Almoxarife Técnico',
      en: 'Technical Warehouse Keeper',
      es: 'Encargado de Almacén Técnico',
    },
    company: 'JCS INSTALACOES HIDRAULICAS E ELETRICAS LTDA.',
    location: 'São Paulo - SP',
    period: {
      pt: '09/2021 - 01/2022',
      en: '09/2021 - 01/2022',
      es: '09/2021 - 01/2022',
    },
    duration: {
      pt: 'Logística de Materiais Técnicos',
      en: 'Technical Logistics',
      es: 'Logística de Materiales',
    },
    type: {
      pt: 'Tempo Integral',
      en: 'Full-time',
      es: 'Tiempo Completo',
    },
    description: {
      pt: 'Controle, gestão, levantamento e organização de materiais elétricos e hidráulicos para obras e manutenções.',
      en: 'Managed, surveyed, and organized electrical and hydraulic materials for construction and facility projects.',
      es: 'Control, inventario y organización de materiales eléctricos e hidráulicos.',
    },
    achievements: {
      pt: [
        'Gestão de estoque de cabos, disjuntores, conexões hidráulicas e ferramentas.',
        'Conferência rigorosa de especificações técnicas e levantamento de necessidades de compra.',
      ],
      en: [
        'Inventory tracking of cables, breakers, pipes, fittings, and specialized tools.',
        'Cross-checked technical specifications for purchase orders.',
      ],
      es: [
        'Control de stock de conductores, disyuntores y accesorios hidráulicos.',
        'Revisión técnica de suministros.',
      ],
    },
    skills: ['Gestão de Estoque', 'Materiais Elétricos & Hidráulicos', 'Logística Técnica'],
  },
  {
    id: 'concrepoxi',
    role: {
      pt: 'Servente de Obras / Almoxarife',
      en: 'Construction Assistant / Warehouseman',
      es: 'Ayudante de Obra / Almacenero',
    },
    company: 'CONCREPOXI ENGENHARIA LTDA.',
    location: 'São Paulo - SP',
    period: {
      pt: '08/2020 - 09/2021',
      en: '08/2020 - 09/2021',
      es: '08/2020 - 09/2021',
    },
    duration: {
      pt: 'Engenharia Civil & Pisos Epóxi',
      en: 'Civil Engineering & Epoxy Flooring',
      es: 'Ingeniería Civil y Epoxi',
    },
    type: {
      pt: 'Tempo Integral',
      en: 'Full-time',
      es: 'Tiempo Completo',
    },
    description: {
      pt: 'Controle, gestão, levantamento e organização de materiais e apoio operacional em obras civis e revestimentos técnicos.',
      en: 'Logistics management, inventory controls, and hands-on operational support for civil construction and technical coatings.',
      es: 'Control de materiales y apoyo operativo en obras civiles y revestimientos técnicos.',
    },
    achievements: {
      pt: [
        'Apoio em preparação de superfícies para aplicação de resinas epóxi e pisos industriais.',
        'Organização de ferramentas e materiais de construção conforme normas de segurança.',
      ],
      en: [
        'Supported surface preparation for industrial epoxy floor coatings.',
        'Maintained on-site tool safety and inventory organization.',
      ],
      es: [
        'Apoyo en preparación de superficies para suelos epoxi industriales.',
        'Organización de herramientas y materiales de obra.',
      ],
    },
    skills: ['Pisos Epóxi', 'Obras Civis', 'Organização de Materiais', 'Segurança'],
  },
  {
    id: 'capanema',
    role: {
      pt: 'Montador de Móveis e Artefatos de Madeira',
      en: 'Furniture Assembler & Warehouse Assistant',
      es: 'Montador de Muebles y Auxiliar de Almacén',
    },
    company: 'CAPANEMA MOVEIS LTDA.',
    location: 'São Miguel do Guamá - PA',
    period: {
      pt: '06/2016 - 02/2018',
      en: '06/2016 - 02/2018',
      es: '06/2016 - 02/2018',
    },
    duration: {
      pt: 'Marcenaria & Logística',
      en: 'Carpentry & Logistics',
      es: 'Carpintería y Logística',
    },
    type: {
      pt: 'Tempo Integral',
      en: 'Full-time',
      es: 'Tiempo Completo',
    },
    description: {
      pt: 'Montagem de móveis planejados, suporte no transporte como auxiliar de motorista e apoio em rotinas de almoxarifado.',
      en: 'Assembled furniture, provided logistics support, and maintained warehouse operations.',
      es: 'Montaje de muebles, soporte en transporte y almacén.',
    },
    achievements: {
      pt: [
        'Montagem precisa de móveis com uso de ferramentas elétricas e manuais.',
        'Suporte em entregas e conferência de produtos.',
      ],
      en: [
        'Assembled furniture using manual and power tools with high precision.',
        'Assisted in deliveries and inventory control.',
      ],
      es: [
        'Montaje de muebles con herramientas de precisión y apoyo logístico.',
      ],
    },
    skills: ['Montagem de Móveis', 'Ferramentas Manuais', 'Almoxarifado'],
  },
  {
    id: 'madam_mad',
    role: {
      pt: 'Operador de Desempenadeira na Usinagem Convencional de Madeira',
      en: 'Planer Machine Operator in Wood Machining',
      es: 'Operador de Cepilladora / Mecanizado de Madera',
    },
    company: 'MADAM MAD E SERVICOS DE TRANSPORTES LTDA.',
    location: 'São Miguel do Guamá - PA',
    period: {
      pt: '01/2016 - 02/2016',
      en: '01/2016 - 02/2016',
      es: '01/2016 - 02/2016',
    },
    duration: {
      pt: 'Usinagem Industrial',
      en: 'Industrial Machining',
      es: 'Mecanizado Industrial',
    },
    type: {
      pt: 'Tempo Integral',
      en: 'Full-time',
      es: 'Tiempo Completo',
    },
    description: {
      pt: 'Operação de maquinário de usinagem e desempenadeira de madeira com rigoroso controle de medidas e segurança.',
      en: 'Operated wood planing and machining equipment ensuring precision measurements and operator safety.',
      es: 'Operación de maquinaria de cepillado y mecanizado de madera con control de medidas y seguridad.',
    },
    achievements: {
      pt: [
        'Aplainamento e preparação de peças de madeira com alta precisão dimensional.',
        'Operação em conformidade com normas de segurança em máquinas.',
      ],
      en: [
        'Planing and dimensioning wood pieces with high precision.',
        'Adhered strictly to machine safety protocols.',
      ],
      es: [
        'Cepillado y preparación de piezas con precisión dimensional.',
      ],
    },
    skills: ['Operação de Máquinas', 'Usinagem de Madeira', 'Medidas de Precisão'],
  },
];

export const DEVELOPER_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'dev_freelance_fullstack',
    role: {
      pt: 'Desenvolvedor Web Full-Stack / Software Engineer',
      en: 'Full-Stack Software Engineer & Web Developer',
      es: 'Desarrollador Full-Stack e Ingeniero de Software',
    },
    company: 'Projetos Práticos & Soluções Web Corporativas',
    location: 'São Paulo - SP (Remoto / Freelance)',
    period: {
      pt: '2023 - Atualmente',
      en: '2023 - Present',
      es: '2023 - Actualidad',
    },
    duration: {
      pt: 'Atuação Contínua',
      en: 'Continuous Practice',
      es: 'Práctica Continua',
    },
    type: {
      pt: 'Autônomo / Freelancer & Soluções Digitais',
      en: 'Freelance & Digital Solutions',
      es: 'Freelance y Soluciones Digitales',
    },
    description: {
      pt: 'Concepção, arquitetura de software e desenvolvimento de aplicações web modernas, plataformas SaaS e sistemas de gestão de alto desempenho. Foco em TypeScript, React, Next.js (App Router, Server Actions), Node.js, REST APIs, bancos de dados relacionais e em tempo real (PostgreSQL, Firestore), Clean Architecture e deploy automatizado CI/CD.',
      en: 'Architecture and end-to-end development of modern web applications, SaaS platforms, and high-performance management systems. Focused on TypeScript, React, Next.js (App Router, Server Actions), Node.js, REST APIs, SQL/NoSQL databases (PostgreSQL, Firestore), Clean Architecture, and automated CI/CD deployment.',
      es: 'Arquitectura y desarrollo integral de aplicaciones web modernas, plataformas SaaS y sistemas de gestión de alto rendimiento. Enfoque en TypeScript, React, Next.js, Node.js, APIs REST, PostgreSQL, Firestore y despliegue CI/CD.',
    },
    achievements: {
      pt: [
        'Desenvolvimento e publicação de mais de 10 plataformas web funcionais em produção (ERPs de facilities, agendamentos de limpeza CleanPro, sistemas de prontuário clínico MediFlow, portais educacionais CEI/EBD, dashboards analíticos SaaS e web rádio streaming com Web Audio API).',
        'Implementação de arquitetura baseada em Next.js App Router, Server Components e Server Actions, otimizando Core Web Vitals e renderização ultra-rápida.',
        'Construção de APIs RESTful estruturadas com Node.js e Express, incluindo validação rigorosa de esquemas, middleware de proteção e autenticação segura baseada em tokens.',
        'Modelagem e integração de bancos de dados relacionais (PostgreSQL) e NoSQL em tempo real (Firebase Firestore / Supabase) com índices e regras de segurança estritas.',
        'Aplicação de princípios SOLID, Clean Code e versionamento profissional com Git/GitHub e automação de deploy contínuo (CI/CD via Vercel).',
      ],
      en: [
        'Designed and deployed 10+ production-ready web platforms (CleanPro booking system, MediFlow clinical records, CEI educational portals, SaaS analytics dashboards, and Web Audio streaming platform).',
        'Implemented modern architectures with Next.js App Router, Server Components and Server Actions, maximizing Core Web Vitals and SEO performance.',
        'Constructed structured RESTful APIs with Node.js and Express, incorporating strict schema validation, security middleware, and token-based authentication.',
        'Engineered relational database schemas (PostgreSQL) and real-time NoSQL databases (Firebase Firestore / Supabase) with tight security rules.',
        'Applied SOLID principles, Clean Code standards, and automated CI/CD deployment workflows via Git and Vercel.',
      ],
      es: [
        'Desarrollo y despliegue de más de 10 aplicaciones web en producción (plataforma CleanPro, MediFlow, portales educativos CEI, dashboards SaaS y streaming de audio).',
        'Implementación de arquitecturas modernas con Next.js App Router y Server Actions con máximo rendimiento.',
        'Construcción de APIs RESTful con Node.js, Express, validación estricta y autenticación segura.',
        'Modelado de bases de datos relacionales (PostgreSQL) y NoSQL en tiempo real (Firestore) con reglas de seguridad.',
        'Buenas prácticas de Clean Code, control de versiones con Git/GitHub e integración continua CI/CD.',
      ],
    },
    skills: [
      'TypeScript',
      'Next.js 15',
      'React 19',
      'Node.js',
      'PostgreSQL',
      'Firestore',
      'Tailwind CSS',
      'REST APIs',
      'Clean Code',
      'Git & CI/CD',
    ],
  },
  {
    id: 'dev_solutions_analyst',
    role: {
      pt: 'Desenvolvedor de Soluções Web & Automação de Processos',
      en: 'Web Solutions Developer & Workflow Automation',
      es: 'Desarrollador de Soluciones Web y Automatización',
    },
    company: 'Allan Lima Dev Solutions',
    location: 'São Paulo - SP',
    period: {
      pt: '2022 - 2023',
      en: '2022 - 2023',
      es: '2022 - 2023',
    },
    duration: {
      pt: '1 ano',
      en: '1 year',
      es: '1 año',
    },
    type: {
      pt: 'Projetos e Automação',
      en: 'Projects & Automation',
      es: 'Proyectos y Automatización',
    },
    description: {
      pt: 'Desenvolvimento de ferramentas digitais, calculadoras dinâmicas de engenharia e dashboards para automação de rotinas operacionais, controle de dados e interfaces responsivas com foco em usabilidade.',
      en: 'Developed digital tools, interactive engineering calculators, and dashboards to automate operational routines, data management, and responsive interfaces focused on UX.',
      es: 'Desarrollo de herramientas digitales, calculadoras de ingeniería y dashboards para automatización de rutinas operacionales y control de datos.',
    },
    achievements: {
      pt: [
        'Criação de componentes reativos com validação de formulários em tempo real e cálculos automáticos de métricas.',
        'Integração com serviços de nuvem, envio de notificações e persistência de dados estruturados.',
        'Otimização de acessibilidade e design responsivo (Mobile-First) para compatibilidade entre smartphones, tablets e desktops.',
      ],
      en: [
        'Engineered reactive UI components with real-time input validation and automatic metric computations.',
        'Integrated cloud services, transactional messaging, and structured local/remote persistence.',
        'Optimized mobile-first responsiveness and accessibility for cross-device performance.',
      ],
      es: [
        'Creación de componentes dinámicos con validación en tiempo real y cálculos automáticos.',
        'Integración con servicios cloud y persistencia estructurada de datos.',
        'Optimización responsive mobile-first y accesibilidad cross-device.',
      ],
    },
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5/CSS3', 'REST APIs', 'UI/UX Responsivo'],
  },
];

export const DEVELOPER_EDUCATION: EducationItem[] = [
  {
    id: 'senai_ti_dev',
    degree: {
      pt: 'Competência Transversal - Tecnologia da Informação',
      en: 'Cross-Disciplinary Competence - Information Technology',
      es: 'Competencia Transversal - Tecnología de la Información',
    },
    institution: 'SENAI Ary Torres - São Paulo/SP',
    year: '04/2020',
    description: {
      pt: 'Sistemas operacionais, licenciamento de software, hardware, ativos de rede, cabeamento estruturado, serviços de rede, pilares de segurança da informação, governança e modelo OSI.',
      en: 'Operating systems, software licensing, hardware architectures, network assets, structured cabling, network services, information security pillars, governance, and OSI model.',
      es: 'Sistemas operativos, licencias, hardware, redes, cableado estructurado, seguridad de la información y modelo OSI.',
    },
    topics: {
      pt: [
        'Cabeamento Estruturado e Conectividade de Redes',
        'Ativos de Rede e Infraestrutura de TI',
        'Segurança da Informação e Mitigação de Riscos',
        'Arquitetura de Sistemas Operacionais e Modelo OSI',
        'Governança de TI e Licenciamento de Software',
      ],
      en: [
        'Structured Cabling & Network Connectivity',
        'Network Active Hardware & IT Infrastructure',
        'Information Security & Risk Mitigation',
        'OS Architecture & OSI Model Layers',
        'IT Governance & Software Licensing',
      ],
      es: [
        'Cableado estructurado y conectividad de redes',
        'Infraestructura de red y hardware',
        'Seguridad de la información y mitigación de riesgos',
        'Arquitectura de sistemas operativos y modelo OSI',
      ],
    },
  },
  {
    id: 'dev_fullstack_spec',
    degree: {
      pt: 'Formação Contínua em Desenvolvimento Web Full-Stack',
      en: 'Full-Stack Web Development & Modern Software Engineering',
      es: 'Formación Continua en Desarrollo Web Full-Stack',
    },
    institution: 'Engenharia de Software & Ecossistemas Web Modernos',
    year: '2022 - Atualmente',
    description: {
      pt: 'Especialização prática contínua em arquitetura web moderna, TypeScript estrito, ecossistema React/Next.js (App Router, Server Actions), Node.js, APIs RESTful, bancos de dados relacionais (PostgreSQL) e NoSQL (Firestore), Clean Code e CI/CD.',
      en: 'Advanced practical specialization in modern web architecture, strict TypeScript, React/Next.js ecosystem, Node.js, RESTful APIs, relational databases (PostgreSQL), NoSQL (Firestore), Clean Code, and CI/CD.',
      es: 'Especialización práctica en arquitectura web moderna, TypeScript, React/Next.js, Node.js, APIs RESTful, bases de datos PostgreSQL/Firestore y Clean Code.',
    },
    topics: {
      pt: [
        'Next.js 15 & React 19 Avançado (App Router, SSR, Server Actions)',
        'TypeScript Estrito e Padrões de Projeto (Design Patterns)',
        'Engenharia de Backend com Node.js, Express e REST APIs',
        'Modelagem Relacional (PostgreSQL) e NoSQL em Tempo Real (Firestore)',
        'Deploy Contínuo, Git Flow e DevOps Básico (Vercel, Cloud)',
      ],
      en: [
        'Advanced Next.js 15 & React 19 (App Router, SSR, Server Actions)',
        'Strict TypeScript and Design Patterns',
        'Backend Engineering with Node.js, Express & REST APIs',
        'Relational (PostgreSQL) & Real-time NoSQL (Firestore) Data Modeling',
        'Continuous Deployment, Git Flow & DevOps Essentials',
      ],
      es: [
        'Next.js 15 y React 19 avanzado (App Router, SSR, Server Actions)',
        'TypeScript estricto y patrones de diseño',
        'Ingeniería backend con Node.js y APIs REST',
        'Modelado de datos en PostgreSQL y Firestore',
        'Integración continua, Git y despliegue cloud',
      ],
    },
  },
  {
    id: 'ensino_medio_dev',
    degree: {
      pt: 'Ensino Médio Completo',
      en: 'High School Diploma',
      es: 'Educación Secundaria Completa',
    },
    institution: 'CEEJA Sinhá Pantoja - São Paulo/SP',
    year: '03/2022',
    description: {
      pt: 'Formação básica concluída com ênfase em raciocínio lógico-matemático e comunicação.',
      en: 'Complete general secondary education with strong logical reasoning and communication.',
      es: 'Educación secundaria completa con base sólida en razonamiento y comunicación.',
    },
    topics: {
      pt: ['Ensino Médio Geral Concluído'],
      en: ['General Secondary Education Completed'],
      es: ['Educación Secundaria Completa'],
    },
  },
];

export const DEVELOPER_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'dev_cert_nextjs',
    name: 'Desenvolvimento Web Full-Stack (Next.js 15 & React 19)',
    code: 'NEXT-REACT-FULLSTACK',
    authority: 'Ecossistema Moderno de Desenvolvimento Web',
    validity: { pt: 'Habilitação Ativa', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Arquitetura de aplicações web de alto desempenho, Server Components, App Router, Server Actions, estilização com Tailwind CSS e otimização de Core Web Vitals.',
      en: 'High-performance web application architecture, Server Components, App Router, Server Actions, Tailwind CSS styling, and Core Web Vitals optimization.',
      es: 'Arquitectura web de alto rendimiento, Server Components, App Router, Server Actions y Tailwind CSS.',
    },
    iconName: 'Code2',
  },
  {
    id: 'dev_cert_typescript',
    name: 'TypeScript Avançado & Clean Architecture',
    code: 'TS-CLEAN-ARCH',
    authority: 'Boas Práticas de Engenharia de Software',
    validity: { pt: 'Habilitação Ativa', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Tipagem estrita, interfaces genéricas, princípios SOLID, padrões de projeto, desacoplamento modular e código limpo testável.',
      en: 'Strict typing, generic interfaces, SOLID principles, design patterns, modular decoupling, and clean testable code.',
      es: 'Tipado estricto, interfaces genéricas, principios SOLID, patrones de diseño y código limpio.',
    },
    iconName: 'Terminal',
  },
  {
    id: 'dev_cert_backend',
    name: 'Engenharia de Backend & APIs RESTful (Node.js & Express)',
    code: 'NODE-REST-APIS',
    authority: 'Construção e Arquitetura de APIs',
    validity: { pt: 'Habilitação Ativa', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Construção de servidores Node.js, rotas REST protegidas, validação de esquemas, middleware de segurança, autenticação JWT e tratamento centralizado de erros.',
      en: 'Building Node.js servers, secure REST routes, schema validation, security middleware, JWT authentication, and centralized error handling.',
      es: 'Desarrollo de servidores Node.js, rutas REST seguras, validación de esquemas, middleware y JWT.',
    },
    iconName: 'Server',
  },
  {
    id: 'dev_cert_databases',
    name: 'Bancos de Dados Relacionais & NoSQL (PostgreSQL / Firestore)',
    code: 'DB-SQL-NOSQL',
    authority: 'Engenharia de Dados e Persistência Cloud',
    validity: { pt: 'Habilitação Ativa', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Modelagem relacional, consultas SQL, índices, coleções em tempo real no Firestore e definição de regras de segurança no banco de dados.',
      en: 'Relational schema modeling, SQL queries, indexes, real-time Firestore collections, and database security rules.',
      es: 'Modelado relacional, consultas SQL, índices, colecciones NoSQL y reglas de seguridad.',
    },
    iconName: 'Database',
  },
  {
    id: 'dev_cert_git_cicd',
    name: 'Git, GitHub & Deploy Automatizado (CI/CD)',
    code: 'GIT-DEVOPS-CICD',
    authority: 'Fluxo Ágil e DevOps Essencial',
    validity: { pt: 'Habilitação Ativa', en: 'Certified & Active', es: 'Certificado y Activo' },
    description: {
      pt: 'Versionamento com Git Flow, pull requests, branches, automação de deploys na Vercel/Firebase, gestão segura de variáveis de ambiente e deploy contínuo.',
      en: 'Git Flow version control, pull requests, branch protection, automated Vercel/Firebase deployments, and secure secret management.',
      es: 'Control de versiones con Git Flow, pull requests, despliegue automatizado y variables de entorno seguras.',
    },
    iconName: 'ShieldCheck',
  },
  {
    id: 'dev_cert_senai_ti',
    name: 'Competência Transversal em Tecnologia da Informação',
    code: 'SENAI-TI-2020',
    authority: 'SENAI Ary Torres (São Paulo/SP)',
    validity: { pt: 'Certificado Oficial SENAI', en: 'Official SENAI Certificate', es: 'Certificado Oficial SENAI' },
    description: {
      pt: 'Sistemas operacionais, infraestrutura de redes, cabeamento estruturado, segurança da informação, governança de TI e modelo OSI.',
      en: 'Operating systems, network infrastructure, structured cabling, information security, IT governance, and OSI model.',
      es: 'Sistemas operativos, infraestructura de redes, cableado estructurado, seguridad y modelo OSI.',
    },
    iconName: 'Laptop',
  },
];

export const DEVELOPER_SKILLS_MATRIX = [
  {
    id: 'dev_frontend',
    category: {
      pt: 'Frontend Moderno & Interfaces Reativas',
      en: 'Modern Frontend & Reactive UI',
      es: 'Frontend Moderno e Interfaces Reactivas',
    },
    skills: [
      { name: 'TypeScript & JavaScript Moderno (ES6+)', level: 94 },
      { name: 'Next.js 15 (App Router, Server Actions, SSR)', level: 92 },
      { name: 'React 19 & Componentização Avançada', level: 95 },
      { name: 'Tailwind CSS & Design Responsivo Mobile-First', level: 96 },
      { name: 'HTML5 Semântico, CSS3 & Acessibilidade WCAG', level: 92 },
    ],
  },
  {
    id: 'dev_backend',
    category: {
      pt: 'Backend, Arquitetura & APIs RESTful',
      en: 'Backend Architecture & RESTful APIs',
      es: 'Backend, Arquitectura y APIs RESTful',
    },
    skills: [
      { name: 'Node.js & Express Framework', level: 88 },
      { name: 'Construção de APIs RESTful & Server Actions', level: 90 },
      { name: 'Autenticação Segura (JWT, NextAuth, Tokens)', level: 88 },
      { name: 'Princípios SOLID & Clean Architecture', level: 88 },
      { name: 'Integrações de Serviços de Terceiros e Webhooks', level: 86 },
    ],
  },
  {
    id: 'dev_databases_devops',
    category: {
      pt: 'Bancos de Dados, Cloud & DevOps',
      en: 'Databases, Cloud & DevOps',
      es: 'Bases de Datos, Cloud y DevOps',
    },
    skills: [
      { name: 'PostgreSQL & Consultas SQL Relacionais', level: 88 },
      { name: 'Firebase Firestore & Supabase (Realtime NoSQL)', level: 90 },
      { name: 'Git & Controle de Versão Colaborativo (GitHub)', level: 94 },
      { name: 'Deploy Contínuo CI/CD (Vercel, Cloud)', level: 92 },
      { name: 'Otimização de Performance Web Vitals & SEO', level: 90 },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'eletricista_residencial',
    degree: {
      pt: 'Curso de Eletricista Instalador Residencial & Normas Regulamentadoras',
      en: 'Residential Electrical Installer & Safety Regulations Course',
      es: 'Curso de Electricista Instalador Residencial y Normas de Seguridad',
    },
    institution: 'Formação Profissionalizante em Eletricidade & Segurança do Trabalho',
    year: 'Certificações Ativas',
    description: {
      pt: 'Formação prática e teórica em instalações elétricas residenciais e prediais, dimensionamento de circuitos, montagem de quadros de distribuição, comandos e rigoroso cumprimento de normas regulamentadoras.',
      en: 'Practical and theoretical training in residential and building electrical installations, circuit sizing, distribution board assembly, and strict compliance with safety regulations.',
      es: 'Formación práctica y teórica en instalaciones eléctricas residenciales y edilicias, dimensionamiento y cumplimiento estricto de normas de seguridad.',
    },
    topics: {
      pt: [
        'Instalações Elétricas Residenciais e Prediais (NBR 5410)',
        'Dimensionamento de Condutores, Disjuntores e Dispositivos DR',
        'Montagem e Manutenção de Quadros de Distribuição',
        'Normas Regulamentadoras: NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12',
        'Procedimentos de Bloqueio e Etiquetagem (LOTO / OSHA)',
        'Leitura e Interpretação de Diagramas Unifilares e Multifilares',
      ],
      en: [
        'Residential & Building Electrical Installations (NBR 5410)',
        'Conductor, Circuit Breaker & RCD Protection Sizing',
        'Distribution Board Assembly & Maintenance',
        'Regulatory Safety Standards: NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12',
        'Lockout/Tagout (LOTO) Procedures & Energy Isolation',
        'Reading & Interpreting Single-Line & Wiring Diagrams',
      ],
      es: [
        'Instalaciones eléctricas residenciales y edilicias (NBR 5410)',
        'Dimensionamiento de conductores, disyuntores y dispositivos diferenciales',
        'Montaje y mantenimiento de tableros de distribución',
        'Normas de seguridad: NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12',
        'Procedimientos de bloqueo y etiquetado (LOTO)',
        'Lectura de esquemas unifilares y multifilares',
      ],
    },
  },
  {
    id: 'senai_ti',
    degree: {
      pt: 'Competência Transversal - Tecnologia da Informação',
      en: 'Cross-Disciplinary Competence - Information Technology',
      es: 'Competencia Transversal - Tecnología de la Información',
    },
    institution: 'SENAI Ary Torres - São Paulo/SP',
    year: '04/2020',
    description: {
      pt: 'Sistemas operacionais, licenciamento de software, hardware, ativos de rede, cabeamento estruturado, serviços de rede, pilares de segurança da informação, governança e modelo OSI.',
      en: 'Operating systems, software licensing, hardware architectures, network assets, structured cabling, network services, information security pillars, governance, and OSI model.',
      es: 'Sistemas operativos, licencias, hardware, redes, cableado estructurado, seguridad de la información y modelo OSI.',
    },
    topics: {
      pt: [
        'Cabeamento Estruturado e Conectividade de Redes',
        'Ativos de Rede e Infraestrutura de TI',
        'Segurança da Informação e Mitigação de Riscos',
        'Arquitetura de Sistemas Operacionais e Modelo OSI',
      ],
      en: [
        'Structured Cabling & Network Connectivity',
        'Network Active Hardware & IT Infrastructure',
        'Information Security & Risk Mitigation',
        'OS Architecture & OSI Model Layers',
      ],
      es: [
        'Cableado estructurado y conectividad',
        'Infraestructura de red y hardware',
        'Seguridad de la información y modelo OSI',
      ],
    },
  },
  {
    id: 'cetac_eletricista',
    degree: {
      pt: 'Eletricista Instalador Residencial e Predial',
      en: 'Residential & Commercial Electrician Installer',
      es: 'Electricista Instalador Residencial y Edilicio',
    },
    institution: 'CETAC - Belém/PA',
    year: '06/2016 - 09/2016',
    description: {
      pt: 'Execução e manutenção de instalações elétricas em edificações conforme normas técnicas vigentes e procedimentos específicos com foco em segurança e qualidade.',
      en: 'Executed and maintained electrical installations in buildings conforming to national technical standards, blueprints, quality, and safety.',
      es: 'Ejecución y mantenimiento de instalaciones eléctricas edilicias según normativas vigentes.',
    },
    topics: {
      pt: [
        'Leitura e Interpretação de Diagramas Elétricos e Plantas',
        'Montagem de Caixas de Passagem, Tomadas, Interruptores e Disjuntores',
        'Divisão de Circuitos e Balanceamento de Fases',
        'Aterramento e Proteções Diferenciais Residuais (IDR/DR)',
      ],
      en: [
        'Reading & Interpreting Electrical Blueprints and Schematics',
        'Installation of Junction Boxes, Receptacles, Switches and Breakers',
        'Circuit Branching and Phase Balancing',
        'Earthing Systems and Ground-Fault Circuit Interrupters (GFCI/IDR)',
      ],
      es: [
        'Lectura de esquemas eléctricos y planos',
        'Instalación de cuadros, tomas e interruptores',
        'División de circuitos y balanceo de fases',
      ],
    },
  },
  {
    id: 'ensino_medio',
    degree: {
      pt: 'Ensino Médio Completo',
      en: 'High School Diploma',
      es: 'Educación Secundaria Completa',
    },
    institution: 'CEEJA Sinhá Pantoja - São Paulo/SP',
    year: '03/2022',
    description: {
      pt: 'Formação básica concluída com ênfase em raciocínio lógico, física e comunicação.',
      en: 'Complete general secondary education with strong logical reasoning and communication.',
      es: 'Educación secundaria completa con base sólida en razonamiento y comunicación.',
    },
    topics: {
      pt: ['Ensino Médio Geral Concluído'],
      en: ['General Secondary Education Completed'],
      es: ['Educación Secundaria Completa'],
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj_qgbt_retrofit',
    title: {
      pt: 'Revisão Preditiva e Termografia em QGBT Corporativo',
      en: 'Predictive Thermography & Torquing on Main Distribution Panel (QGBT)',
      es: 'Revisión Predictiva y Termografía en Tablero General (QGBT)',
    },
    category: 'predictive',
    categoryLabel: {
      pt: 'Preditiva & Termografia',
      en: 'Predictive & Thermal',
      es: 'Predictivo y Térmico',
    },
    summary: {
      pt: 'Inspeção termográfica e manutenção preventiva em quadro geral de distribuição de 800A com 32 disjuntores de circuitos terminais.',
      en: 'Thermographic survey and preventive torquing on an 800A main power distribution panel supplying 32 sub-circuits.',
      es: 'Inspección termográfica y mantenimiento preventivo en tablero general de 800A con 32 disyuntores.',
    },
    challenge: {
      pt: 'Identificação precoce de pontos de aquecimento (hotspots) em conexões de barramentos principais antes de gerar desarmes indesejados ou queima de componentes.',
      en: 'Early detection of thermal hotspots on main busbar connections under peak load before triggering unmanaged outages or equipment failure.',
      es: 'Detección temprana de puntos calientes en barras principales antes de provocar cortes intempestivos.',
    },
    solution: {
      pt: 'Realização de varredura com termovisor calibrado sob carga máxima, aplicação de torque calibrado com torquímetro dinamométrico conforme tabela do fabricante e limpeza dielétrica.',
      en: 'Conducted calibrated infrared thermal scan under peak facility demand, applied manufacturer-specified torque with calibrated torque wrench, and performed dielectric cleaning.',
      es: 'Barrido térmico bajo carga máxima, reapriete con llave dinamométrica calibrada y limpieza dieléctrica.',
    },
    results: {
      pt: 'Redução de temperatura nas conexões críticas de 68°C para 34°C (temperatura ambiente), 100% de disponibilidade elétrica sem paradas não programadas.',
      en: 'Reduced connection temperatures from 68°C to 34°C, maintaining 100% power reliability with zero unplanned downtime.',
      es: 'Reducción de temperatura en conexiones de 68°C a 34°C, asegurando 100% de disponibilidad.',
    },
    equipment: ['Câmera Termográfica Fluke', 'Torquímetro Calibrado', 'Disjuntores Schneider Compact NSX', 'Barramentos de Cobre Eletrolítico'],
    standards: ['NR-10', 'NBR 5410', 'LOTO'],
    image: 'https://picsum.photos/seed/qgbt-panel/800/600',
    highlight: true,
  },
  {
    id: 'proj_generator_ups',
    title: {
      pt: 'Rotina de Teste e Manutenção em Grupo Moto-Gerador 250kVA e UPS',
      en: '250kVA Diesel Generator & Industrial UPS Load-Transfer Maintenance',
      es: 'Mantenimiento y Prueba de Grupo Electrógeno 250kVA y SAI/UPS',
    },
    category: 'generators_ups',
    categoryLabel: {
      pt: 'Geradores & UPS',
      en: 'Generators & UPS',
      es: 'Generadores y SAI',
    },
    summary: {
      pt: 'Execução de teste mensal de transferência automática com carga e checagem de banco de baterias em sistema de emergência crítico.',
      en: 'Execution of scheduled monthly automatic load transfer test and battery impedance check for a critical emergency backup system.',
      es: 'Prueba mensual de transferencia automática con carga y revisión de baterías en sistema de emergencia.',
    },
    challenge: {
      pt: 'Garantir que a transferência de energia entre concessionária e gerador ocorra em menos de 10 segundos, sem oscilação na saída dos No-breaks.',
      en: 'Ensure zero-voltage drop transition between utility grid and generator in under 10 seconds while maintaining pure sine wave UPS output.',
      es: 'Garantizar la conmutación entre red y generador en menos de 10 segundos sin caídas de tensión en el SAI.',
    },
    solution: {
      pt: 'Verificação de nível de óleo, pré-aquecimento, tensão de partida das baterias 24Vdc, parametrização do controlador DeepSea e teste de comutação do contator motorizado ATS.',
      en: 'Inspected engine oil viscosity, coolant pre-heating, 24Vdc starting battery voltages, DeepSea controller parameters, and ATS motorized contactor commutation.',
      es: 'Revisión de niveles, precalentamiento, baterías de arranque 24Vdc, controlador DeepSea y conmutador ATS.',
    },
    results: {
      pt: 'Transferência executada em 7.2 segundos com transição perfeita do No-break (0ms de corte na carga sensível).',
      en: 'Successful automatic transfer in 7.2 seconds with 0ms interruption on sensitive server loads via online double-conversion UPS.',
      es: 'Transferencia completada en 7.2 segundos con cero corte de energía en equipos críticos.',
    },
    equipment: ['Gerador Cummins 250kVA', 'Controlador DeepSea DSE7320', 'UPS APC Symmetra 40kVA', 'Analisador de Baterias'],
    standards: ['NR-10', 'NBR 14039', 'Procedimento Operacional JLL'],
    image: 'https://picsum.photos/seed/generator-engine/800/600',
    highlight: true,
  },
  {
    id: 'proj_motor_control',
    title: {
      pt: 'Montagem e Comissionamento de Quadro de Comando para Bombas de Recalque',
      en: 'Assembly & Commissioning of Duplex Booster Pump Control Panel',
      es: 'Montaje y Puesta en Marcha de Cuadro de Control para Bombas',
    },
    category: 'electrical',
    categoryLabel: {
      pt: 'Painéis Elétricos & Comandos',
      en: 'Control Panels & Motors',
      es: 'Cuadros y Motores',
    },
    summary: {
      pt: 'Montagem completa de painel elétrico com revezamento automático de bombas, proteção por relé térmico e chaves de nível eletromecânicas.',
      en: 'Complete in-house wiring and testing of an automatic alternating duplex pump control panel with thermal overload protection and float switches.',
      es: 'Armado completo de cuadro eléctrico con alternancia automática de bombas y protección térmica.',
    },
    challenge: {
      pt: 'Substituir painel obsoleto com histórico de falhas intermitentes sem interromper o abastecimento de água do edifício comercial de 12 andares.',
      en: 'Replace an obsolete control panel prone to intermittent trips without interrupting water supply to a 12-story commercial building.',
      es: 'Sustituir cuadro obsoleto sin interrumpir el suministro de agua en edificio corporativo de 12 plantas.',
    },
    solution: {
      pt: 'Pré-montagem em bancada com canaletas perfuradas, identificação numérica de fios (anilhamento), contatores WEG CWM, relés de sobrecarga e chave comutadora Auto/Manual/Desligado.',
      en: 'Bench pre-assembly using slotted wiring ducts, wire ferrules with numbered identification tags, WEG CWM contactors, thermal relays, and Manual/Auto selector switch.',
      es: 'Premontaje con canaletas ranuradas, etiquetado de cables, contactores WEG, relés de sobrecarga y selector Manual/Auto.',
    },
    results: {
      pt: 'Instalação e chaveamento concluídos em janela de 2 horas noturna. Operação 100% automatizada e balanceada entre as duas bombas de 5CV.',
      en: 'Installed during a 2-hour night maintenance window. 100% automated rotation between dual 5HP pumps with failover redundancy.',
      es: 'Instalación completada en ventana nocturna de 2 horas con alternancia perfecta entre bombas de 5CV.',
    },
    equipment: ['Contatores WEG CWM25', 'Relés de Sobrecarga RW27D', 'Disjuntores Motor MPW', 'Botoeiras e Sinalizadores LED 24V'],
    standards: ['NBR 5410', 'NR-10', 'NR-12'],
    image: 'https://picsum.photos/seed/pump-panel/800/600',
    highlight: true,
  },
  {
    id: 'proj_lighting_retrofit',
    title: {
      pt: 'Retrofit de Iluminação Corporativa e Infraestrutura de Eletrocalhas',
      en: 'Corporate LED Lighting Retrofit & Cable Tray Infrastructure',
      es: 'Retrofit de Iluminación LED y Tendido de Bandejas Portacables',
    },
    category: 'electrical',
    categoryLabel: {
      pt: 'Instalações & Iluminação',
      en: 'Wiring & Lighting',
      es: 'Instalaciones e Iluminación',
    },
    summary: {
      pt: 'Modernização de mais de 180 luminárias fluorescentes para painéis LED 40W e instalação de 120 metros de eletrocalhas perfuradas.',
      en: 'Modernized 180+ fluorescent fixtures to 40W high-efficiency LED panels and installed 120 meters of perforated steel cable trays.',
      es: 'Modernización de 180 luminarias a paneles LED de 40W y tendido de 120 metros de bandejas metálicas.',
    },
    challenge: {
      pt: 'Trabalho em altura com forro de gesso e presença de cabeamento estruturado sensível sem causar poeira ou danos estruturais.',
      en: 'Execution at height (NR-35) inside gypsum false ceiling with live structured network cabling nearby, demanding dust control and zero damage.',
      es: 'Trabajos en altura (NR-35) sobre falso techo de yeso con cables de datos activos sin generar polvo.',
    },
    solution: {
      pt: 'Uso de andaimes travados e plataformas móveis com linha de vida, ferramentas com aspiração de pó, passagem de cabos anti-chama AFumex e balanceamento de circuitos.',
      en: 'Used locked mobile scaffolding with dedicated lifelines, dust-shrouded tools, flame-retardant Halogen-Free cables (AFumex), and phase-balanced circuit distribution.',
      es: 'Uso de andamios con línea de vida, herramientas con aspiración, cables libres de halógenos y balanceo de fases.',
    },
    results: {
      pt: 'Redução de 58% no consumo elétrico da iluminação e aumento do índice de iluminamento de 320 lux para 500 lux (NBR 8995-1).',
      en: '58% drop in lighting energy consumption and improved illuminance from 320 lux to a uniform 500 lux compliant with NBR 8995-1.',
      es: '58% de ahorro energético y aumento de iluminancia a 500 lux según normativa.',
    },
    equipment: ['Luminárias LED Philips 40W 4000K', 'Cabos Prysmian AFumex 2.5mm²', 'Eletrocalhas Galvanizadas Mopa', 'Medidor Luxímetro Digital'],
    standards: ['NR-35', 'NBR 5410', 'NBR 8995-1'],
    image: 'https://picsum.photos/seed/led-lighting/800/600',
    highlight: false,
  },
  {
    id: 'proj_hydraulic_valves',
    title: {
      pt: 'Manutenção de Válvulas Redutoras de Pressão e Barrilete Hidráulico',
      en: 'Pressure Reducing Valve (PRV) Overhaul & Hydraulic Manifold Maintenance',
      es: 'Mantenimiento de Válvulas Redutoras de Presión y Colector Hidráulico',
    },
    category: 'hydraulic',
    categoryLabel: {
      pt: 'Hidráulica & Bombas',
      en: 'Plumbing & Hydraulics',
      es: 'Fontanería y Bombas',
    },
    summary: {
      pt: 'Desmontagem, limpeza, substituição de diafragmas e calibragem de válvulas redutoras de pressão nos andares intermediários.',
      en: 'Disassembly, descaling, diaphragm kit replacement, and dynamic calibration of water pressure reducing valves across building zones.',
      es: 'Desmontaje, cambio de membranas y calibración de válvulas reductoras de presión.',
    },
    challenge: {
      pt: 'Golpes de aríete e picos de pressão nas colunas de água provocando vibrações e riscos de rompimento em tubulações prediais.',
      en: 'Water hammer oscillations and dangerous pressure spikes threatening building plumbing integrity and generating tenant noise complaints.',
      es: 'Golpes de ariete y sobrepresión en columnas de agua con riesgo de rotura de tuberías.',
    },
    solution: {
      pt: 'Revisão das válvulas redutoras Bermad, purga de ar, instalação de manômetros de glicerina de precisão e ajuste fino para 2.5 bar constante.',
      en: 'Overhauled Bermad pilot-operated valves, purged trapped air pockets, installed glycerin-filled pressure gauges, and fine-tuned static/dynamic pressure to 2.5 bar.',
      es: 'Revisión de válvulas Bermad, purgado de aire, instalación de manómetros de glicerina y calibración a 2.5 bar.',
    },
    results: {
      pt: 'Eliminação completa dos ruídos hidráulicos e estabilização da pressão em todos os pontos de consumo.',
      en: '100% elimination of water hammer and stable flow pressure across all commercial tenant restrooms and pantries.',
      es: 'Eliminación total del golpe de ariete y estabilización de la presión en todos los puntos.',
    },
    equipment: ['Válvulas Redutoras Bermad 2"', 'Manômetros de Glicerina 0-10 bar', 'Tubulações PPR Termofusão', 'Chaves Stillson Industriais'],
    standards: ['NBR 5626', 'Boas Práticas de Facilities'],
    image: 'https://picsum.photos/seed/hydraulic-valves/800/600',
    highlight: false,
  },
  {
    id: 'proj_civil_painting',
    title: {
      pt: 'Reforma Estrutural em Drywall, Piso Elevado e Pintura Epóxi Técnica',
      en: 'Civil Infrastructure Overhaul: Drywall, Raised Access Floors & Technical Epoxy Coating',
      es: 'Reforma Civil: Drywall, Suelo Técnico y Pintura Epoxi',
    },
    category: 'civil_painting',
    categoryLabel: {
      pt: 'Civil & Pintura',
      en: 'Civil & Painting',
      es: 'Civil y Pintura',
    },
    summary: {
      pt: 'Recuperação de paredes em drywall após passagem de infraestrutura elétrica, nivelamento de piso elevado e pintura epóxi em sala técnica de geradores.',
      en: 'Drywall restoration post-cable pull, laser leveling of raised floor pedestals, and high-durability epoxy floor coating in generator room.',
      es: 'Recuperación de tabiquería en drywall, nivelación de suelo técnico y pintura epoxi en sala técnica.',
    },
    challenge: {
      pt: 'Trabalho em ambiente técnico com alto tráfego de equipamentos pesados e exigência de piso impermeável e resistente a óleos.',
      en: 'Technical environment with heavy equipment traffic requiring an oil-impervious, anti-dust, and non-slip floor coating.',
      es: 'Entorno técnico con alto tráfico que requiere suelo impermeable y resistente a aceites.',
    },
    solution: {
      pt: 'Tratamento de juntas com fita telada e massa de acabamento, ajuste com nível a laser e aplicação de primer selador com duas demãos de epóxi poliamida 100% sólidos.',
      en: 'Joint treatment with fiber mesh and setting compound, laser leveling of floor stringers, and applied polyamide epoxy primer + 2 coats of chemical-resistant finish.',
      es: 'Tratamiento de juntas con cinta de fibra, nivelación láser y aplicación de 2 capas de epoxi de alta resistencia.',
    },
    results: {
      pt: 'Sala técnica entregue com padrão de limpeza industrial A+, piso antiderrapante lavável e paredes perfeitamente integradas.',
      en: 'Delivered A+ industrial-grade clean technical room with washable, non-slip, oil-resistant flooring and seamless partition walls.',
      es: 'Sala técnica entregada con estándar A+, suelo antideslizante lavable y acabado impecable.',
    },
    equipment: ['Tinta Epóxi Suvinil Alta Resistência', 'Nível a Laser Bosch GLL 3-80', 'Placas Drywall Knauf', 'Massa Corrida & Lixadeira de Teto'],
    standards: ['Normas Técnicas de Acabamento', 'NR-18'],
    image: 'https://picsum.photos/seed/epoxy-floor/800/600',
    highlight: false,
  },
  {
    id: 'proj_clean_pro_nu',
    title: {
      pt: 'CleanPro - Plataforma de Contratação & Serviços de Limpeza',
      en: 'CleanPro - On-Demand Cleaning Services & Booking Platform',
      es: 'CleanPro - Plataforma de Servicios y Reserva de Limpieza',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Plataforma web moderna e intuitiva para contratação de serviços de limpeza profissional residencial e comercial, com orçamentos dinâmicos e agendamento instantâneo.',
      en: 'Modern on-demand cleaning service platform with real-time quote calculation, custom service packaging, and instant online scheduling.',
      es: 'Plataforma web moderna para contratación de servicios de limpieza residencial y comercial con cálculo de presupuestos y reservas.',
    },
    challenge: {
      pt: 'Desenvolver um fluxo de contratação ágil e conversivo, permitindo ao usuário selecionar o tipo de imóvel, metragem e serviços adicionais sem atritos.',
      en: 'Create a friction-free booking flow allowing customers to configure property dimensions and add-on services with instant pricing.',
      es: 'Diseñar un flujo ágil de contratación con cálculo dinámico según dimensiones del inmueble y servicios adicionales.',
    },
    solution: {
      pt: 'Aplicação Next.js com Tailwind CSS, cálculo dinâmico de valores no front-end, formulário multi-etapas e deploy automatizado na Vercel.',
      en: 'Built with Next.js and Tailwind CSS featuring multi-step form wizard, instant cost calculation, and automated Vercel CI/CD deployment.',
      es: 'Desarrollo en Next.js y Tailwind CSS con formulario multi-paso, cálculo instantáneo y despliegue en Vercel.',
    },
    results: {
      pt: 'Interface 100% responsiva para mobile e desktop, gerando solicitações organizadas de orçamento e agendamento.',
      en: 'Fully responsive mobile-first interface generating structured quote requests and appointments.',
      es: 'Interfaz 100% responsiva con generación organizada de solicitudes de presupuesto.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Deployment', 'Responsive UI'],
    standards: ['Clean Architecture', 'Mobile-First', 'WCAG Accessibility'],
    image: 'https://picsum.photos/seed/cleanpro-client/800/600',
    liveUrl: 'https://clean-pro-nu.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_clean_pro_admin',
    title: {
      pt: 'CleanPro Admin - Painel de Gestão Operacional & Financeira',
      en: 'CleanPro Admin - Operations & Financial Management Suite',
      es: 'CleanPro Admin - Panel de Gestión Operativa y Financiera',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Dashboard administrativo para gestores monitorarem agendamentos, distribuição de equipes de limpeza, faturamento e relatórios de clientes em tempo real.',
      en: 'Comprehensive admin dashboard for tracking bookings, field staff allocation, revenue metrics, and customer service records.',
      es: 'Panel administrativo para supervisar reservas, asignación de personal de limpieza, facturación y reportes en tiempo real.',
    },
    challenge: {
      pt: 'Centralizar dados de múltiplos atendimentos diários, métricas de produtividade e status de ordens de serviço em uma única interface operacional.',
      en: 'Consolidate multiple daily cleaning dispatches, team productivity metrics, and work order statuses into a unified operational hub.',
      es: 'Centralizar datos de múltiples servicios diarios, métricas de productividad y estado de órdenes de trabajo.',
    },
    solution: {
      pt: 'Dashboard analítico com cards de KPIs, gráficos de desempenho, tabela dinâmica de serviços com filtros por status e controle de acesso.',
      en: 'Analytics dashboard featuring KPI cards, performance charts, dynamic service tables with status filtering, and secure routing.',
      es: 'Dashboard analítico con tarjetas KPI, gráficos de rendimiento y tablas dinámicas de servicios con filtros avanzados.',
    },
    results: {
      pt: 'Visualização clara dos indicadores do negócio e ganho expressivo na agilidade de despacho e conferência de serviços.',
      en: 'Crystal-clear operational visibility, substantially speeding up dispatching and service verification.',
      es: 'Visualización clara de indicadores y máxima agilidad en el despacho de servicios.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Dashboard Analytics', 'Vercel'],
    standards: ['RBAC Access Control', 'UI Data Visualization', 'REST Architecture'],
    image: 'https://picsum.photos/seed/cleanpro-admin/800/600',
    liveUrl: 'https://clean-pro-admin-one.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_app_limpeza_cliente',
    title: {
      pt: 'App Limpeza Cliente - Portal de Autoatendimento & Acompanhamento',
      en: 'Cleaning Client App - Customer Self-Service & Status Portal',
      es: 'App Limpieza Cliente - Portal de Autoservicio y Seguimiento',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Portal mobile-first focado no cliente final para solicitar limpezas, visualizar histórico de atendimentos, cronograma e suporte direto.',
      en: 'Mobile-first client portal to request cleanings, view past service history, track upcoming visits, and access immediate support.',
      es: 'Portal móvil para solicitar limpiezas, consultar historial de servicios y contactar soporte.',
    },
    challenge: {
      pt: 'Oferecer aos clientes uma experiência leve, de carregamento rápido em redes móveis e sem complexidade de cadastro.',
      en: 'Deliver an ultra-fast, lightweight mobile experience that works seamlessly across low-bandwidth cellular connections.',
      es: 'Ofrecer una experiencia rápida y ligera en dispositivos móviles con navegación intuitiva.',
    },
    solution: {
      pt: 'Arquitetura SPA com Next.js, design adaptável com botões de ação rápida e integração com canal de atendimento via WhatsApp.',
      en: 'Next.js SPA architecture with adaptive layout, quick-action buttons, and direct WhatsApp support integration.',
      es: 'Arquitectura SPA con Next.js, diseño adaptativo y botón directo de atención por WhatsApp.',
    },
    results: {
      pt: 'Melhoria na experiência do usuário e redução no tempo médio de solicitação de novos serviços.',
      en: 'Enhanced user retention and dramatic reduction in time required to request recurring services.',
      es: 'Mayor satisfacción del usuario y agilidad en la solicitud de nuevos servicios.',
    },
    equipment: ['React', 'TypeScript', 'Tailwind CSS', 'Mobile UI Design', 'Vercel'],
    standards: ['Mobile First', 'Web Performance', 'Usability Standards'],
    image: 'https://picsum.photos/seed/app-limpeza-cli/800/600',
    liveUrl: 'https://app-limpeza-cliente.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_sistema_limpeza_adm',
    title: {
      pt: 'Sistema de Limpeza ADM - Gestão de Escalas, Colaboradores & Insumos',
      en: 'Cleaning Management ADM - Staff Scheduling, Roster & Inventory',
      es: 'Sistema de Limpieza ADM - Gestión de Cuadrillas, Turnos e Insumos',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Sistema para administração de escalas de trabalho de diaristas e equipes de limpeza, controle de estoque de insumos químicos e relatórios de produtividade.',
      en: 'Operations management system for cleaner shifts, field schedules, cleaning product/PPE inventory tracking, and team productivity logs.',
      es: 'Sistema para administración de turnos de cuadrillas de limpieza, control de inventario de insumos y reportes operativos.',
    },
    challenge: {
      pt: 'Eliminar conflitos de horários em escalas de atendimento e evitar o desabastecimento de produtos de limpeza nos postos de trabalho.',
      en: 'Eliminate scheduling overlaps in service routes and prevent cleaning chemical stockouts across distributed client sites.',
      es: 'Evitar solapamiento de horarios en rutas de servicio y controlar el stock de insumos.',
    },
    solution: {
      pt: 'Módulo de grade de colaboradores, alertas de estoque mínimo e emissão de folhas de serviço prontas para a operação.',
      en: 'Built a staff roster grid, minimum stock alert triggers, and printable daily service dispatch sheets.',
      es: 'Módulo de cuadrantes de personal, alertas de stock mínimo y hojas de servicio para la operación.',
    },
    results: {
      pt: 'Otimização de 35% no deslocamento de equipes e controle de 100% dos insumos utilizados por contrato.',
      en: '35% reduction in team transit downtime and 100% accurate material usage tracking per contract.',
      es: '35% de optimización en desplazamientos y control total de materiales por contrato.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stock & Roster Logic', 'Vercel'],
    standards: ['Operational Management', 'Inventory Control', 'Data Consistency'],
    image: 'https://picsum.photos/seed/sistema-limpeza-adm/800/600',
    liveUrl: 'https://sistema-de-l-impeza-adm.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_erp_facilities',
    title: {
      pt: 'ERP Facilities - Sistema Integrado de Gestão Predial & Ativos Críticos',
      en: 'ERP Facilities - Integrated Building Maintenance & Asset Management',
      es: 'ERP Facilities - Sistema Integrado de Mantenimiento y Activos Críticos',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Sistema ERP completo unindo o conhecimento prático em elétrica e infraestrutura com desenvolvimento de software: controle de GMG, UPS, QGBT, HVAC, ordens de serviço e SLA.',
      en: 'Specialized Facilities Management ERP platform integrating field electromechanical knowledge with web architecture: GMG, UPS, QGBT, HVAC, work orders, and SLAs.',
      es: 'Sistema ERP especializado en gestión de facilities y mantenimiento de infraestructura crítica: generadores, SAI/UPS, cuadros eléctricos, HVAC y SLAs.',
    },
    challenge: {
      pt: 'Digitalizar rotinas complexas de manutenção predial preventiva e corretiva com acompanhamento rigoroso de prazos e conformidade com NBRs e NRs.',
      en: 'Digitize comprehensive facility maintenance workflows ensuring strict SLA adherence and compliance with regulatory safety standards (NR-10, NR-35).',
      es: 'Digitalizar rutinas complejas de mantenimiento preventivo y correctivo con cumplimiento normativo.',
    },
    solution: {
      pt: 'Arquitetura modular em Next.js com cadastro hierárquico de ativos, cronograma dinâmico de preventivas, abertura de chamados e relatórios técnicos.',
      en: 'Modular Next.js architecture featuring hierarchical asset registries, dynamic preventive scheduling calendars, and technical compliance reports.',
      es: 'Arquitectura modular en Next.js con inventario jerárquico de equipos, calendario de preventivos y reportes técnicos.',
    },
    results: {
      pt: 'Plataforma completa de alto valor operacional para equipes de manutenção e gestores de infraestrutura predial.',
      en: 'Production-ready platform delivering high operational value for engineering teams and corporate facility directors.',
      es: 'Plataforma completa de alto impacto operativo para equipos de mantenimiento y dirección de infraestructuras.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Facilities Logic', 'Vercel Deployment'],
    standards: ['SLA Management', 'NBR 5410', 'NR-10 / NR-35 Protocols'],
    image: 'https://picsum.photos/seed/erp-facilities/800/600',
    liveUrl: 'https://erp-facilities.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_cei_seven',
    title: {
      pt: 'CEI - Portal de Centro de Educação Infantil & Gestão Escolar',
      en: 'CEI - Early Childhood Education Portal & School Hub',
      es: 'CEI - Portal de Centro de Educación Infantil y Gestión Escolar',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Plataforma institucional e portal de comunicação para Centro de Educação Infantil, integrando grade pedagógica, comunicados, mural e informações institucionais.',
      en: 'Institutional portal and communications hub for early childhood education centers, featuring pedagogical calendars, announcements, and parent resources.',
      es: 'Portal institucional y de comunicación para centros de educación infantil con agenda pedagógica, comunicados y recursos para familias.',
    },
    challenge: {
      pt: 'Criar uma interface acolhedora, clara e acessível para pais e educadores acompanharem as atividades escolares com facilidade.',
      en: 'Design a welcoming, accessible, and user-friendly portal for parents and teachers to stay synchronized on school events.',
      es: 'Diseñar una interfaz accesible y cercana para padres y educadores.',
    },
    solution: {
      pt: 'Next.js com Tailwind CSS, tipografia legível, componentes modulares de avisos e galeria de projetos escolares.',
      en: 'Built with Next.js and Tailwind CSS with refined typography, announcement boards, and educational project showcases.',
      es: 'Desarrollo en Next.js con tipografía cuidada, panel de comunicados y galería de actividades.',
    },
    results: {
      pt: 'Canal de comunicação moderno e transparente entre a gestão escolar e as famílias dos alunos.',
      en: 'Modern, transparent communications channel strengthening parent-school collaboration.',
      es: 'Canal moderno y transparente de comunicación entre la escuela y las familias.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EdTech Portal', 'Vercel'],
    standards: ['Web Accessibility', 'Mobile First', 'Modern Web Standards'],
    image: 'https://picsum.photos/seed/cei-school/800/600',
    liveUrl: 'https://cei-seven.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_dicas_by_ale',
    title: {
      pt: 'Dicas by Ale - Portal de Dicas, Bem-Estar & Conteúdo Digital',
      en: 'Dicas by Ale - Lifestyle, Productivity & Wellness Content Portal',
      es: 'Dicas by Ale - Portal de Consejos, Bienestar y Contenido Digital',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Blog e portal de publicação de artigos com dicas práticas para o cotidiano, organização pessoal, bem-estar e guias informativos.',
      en: 'Fast, SEO-optimized digital magazine and blogging portal covering everyday tips, personal organization, wellness, and practical guides.',
      es: 'Blog y portal de contenido digital con consejos prácticos para el día a día, bienestar y guías informativas.',
    },
    challenge: {
      pt: 'Garantir tempo de carregamento instantâneo, excelente pontuação de SEO e leitura agradável em qualquer dispositivo.',
      en: 'Achieve sub-second page loads, maximum SEO performance scores, and comfortable typography for extended reading sessions.',
      es: 'Garantizar carga instantánea, posicionamiento SEO óptimo y lectura cómoda en cualquier dispositivo.',
    },
    solution: {
      pt: 'Renderização estática otimizada com Next.js, layout responsivo com Tailwind CSS, busca dinâmica de posts e categorização por temas.',
      en: 'Static generation via Next.js, responsive Tailwind CSS layouts, live search filtering, and categorized article archives.',
      es: 'Generación estática con Next.js, diseño responsivo, buscador dinámico de artículos y etiquetas.',
    },
    results: {
      pt: 'Pontuação 100/100 no Google Lighthouse em Performance e Acessibilidade, proporcionando navegação fluida.',
      en: '100/100 Google Lighthouse scores across Performance and Accessibility with fluid navigation.',
      es: 'Máxima puntuación en Google Lighthouse con navegación ultra-fluida.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Vercel'],
    standards: ['Core Web Vitals A+', 'SEO Best Practices', 'Semantic HTML5'],
    image: 'https://picsum.photos/seed/dicas-blog/800/600',
    liveUrl: 'https://dicas-by-ale-snowy.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_nexus_saas',
    title: {
      pt: 'Nexus - Plataforma SaaS & Dashboard Integrado de Gestão',
      en: 'Nexus - Enterprise SaaS Platform & Unified Operations Hub',
      es: 'Nexus - Plataforma SaaS y Panel Integrado de Gestión',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Plataforma SaaS corporativa com painel multifuncional para gestão de projetos, métricas analíticas e automação de fluxos de trabalho.',
      en: 'Modern multi-tenant SaaS workspace platform designed for cross-team project collaboration, KPI tracking, and automated workflows.',
      es: 'Plataforma SaaS empresarial con panel multifuncional para gestión de proyectos, métricas analíticas y flujos de trabajo.',
    },
    challenge: {
      pt: 'Construir uma interface moderna com alto volume de dados sem comprometer a fluidez visual e a velocidade de resposta.',
      en: 'Build a dense, feature-rich dashboard with multiple interactive analytics modules without degrading client-side rendering speed.',
      es: 'Construir un panel con alto volumen de datos manteniendo fluidez visual y velocidad de respuesta.',
    },
    solution: {
      pt: 'Design system modular com componentes reutilizáveis, gerenciamento de estado otimizado e visualização dinâmica de gráficos.',
      en: 'Modular design system with reusable components, optimized state management, and real-time interactive charts.',
      es: 'Sistema de diseño modular con componentes reutilizables y gráficos interactivos en tiempo real.',
    },
    results: {
      pt: 'Aplicação elegante e escalável pronta para integração com APIs e microsserviços em nuvem.',
      en: 'Scalable, enterprise-ready web application ready for production cloud API microservices.',
      es: 'Aplicación elegante y escalable lista para integración con APIs en la nube.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SaaS Architecture', 'Vercel'],
    standards: ['Modern UI Architecture', 'Micro-interactions', 'Clean Code'],
    image: 'https://picsum.photos/seed/nexus-saas/800/600',
    liveUrl: 'https://nexus-mu-eight-49.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_adminhub_pro',
    title: {
      pt: 'AdminHub Pro - Suíte Administrativa & Monitoramento de Dados',
      en: 'AdminHub Pro - High-Performance Enterprise Admin Suite',
      es: 'AdminHub Pro - Suite Administrativa y Monitorización de Datos',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Dashboard administrativo de alta performance para monitoramento de KPIs, gestão de usuários, controle de permissões por perfil e exportação de relatórios.',
      en: 'High-performance admin suite for tracking enterprise KPIs, user authentication roles (RBAC), activity logs, and automated data exports.',
      es: 'Panel administrativo de alto rendimiento para control de KPIs, gestión de usuarios, roles de acceso y exportación de reportes.',
    },
    challenge: {
      pt: 'Desenvolver um modelo de administração completo e modular com tabelas com busca, ordenação e paginação rápidas.',
      en: 'Engineer a scalable administrative framework with instant search, sorting, and pagination across tabular data.',
      es: 'Desarrollar un panel administrativo escalable con búsqueda, ordenación y paginación rápida.',
    },
    solution: {
      pt: 'Componentes reutilizáveis de tabela, cards de métricas com indicadores percentuais e estrutura de rotas protegidas.',
      en: 'Built modular data tables, metric cards with percentage delta indicators, and protected route handlers.',
      es: 'Tablas de datos modulares, tarjetas de métricas con indicadores comparativos y rutas protegidas.',
    },
    results: {
      pt: 'Ferramenta completa para acelerar a entrega de backoffices corporativos seguros.',
      en: 'Robust, reusable boilerplate accelerating the delivery of secure enterprise backoffice platforms.',
      es: 'Herramienta integral para acelerar la entrega de paneles administrativos empresariales.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Data Tables', 'Vercel'],
    standards: ['RBAC Security', 'TypeScript Strict', 'Component-Driven Dev'],
    image: 'https://picsum.photos/seed/adminhub/800/600',
    liveUrl: 'https://adminhub-pro.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_mediflow_clinic',
    title: {
      pt: 'MediFlow - Sistema de Gestão Clínica & Prontuário Médico Digital',
      en: 'MediFlow - Clinical Management & Electronic Health Records (EHR)',
      es: 'MediFlow - Sistema de Gestión Clínica y Expediente Médico Digital',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Plataforma para clínicas e consultórios médicos: agendamento de consultas, cadastro de pacientes, prontuário eletrônico e histórico clínico estruturado.',
      en: 'Full-featured clinical management platform providing online appointment booking, digital patient records (EHR), and consultation logs.',
      es: 'Plataforma para clínicas médicas con agenda de citas, registro de pacientes, historia clínica digital y control de consultas.',
    },
    challenge: {
      pt: 'Organizar informações médicas sensíveis com máxima clareza visual e facilidade de busca para profissionais da saúde em atendimento.',
      en: 'Organize sensitive healthcare records with clean visual hierarchy, minimizing cognitive load for doctors during consultations.',
      es: 'Organizar información médica sensible con máxima claridad visual y rapidez para profesionales de la salud.',
    },
    solution: {
      pt: 'Interface focada na ergonomia médica, histórico cronológico de consultas, status de atendimento e layout limpo e seguro.',
      en: 'Engineered healthcare ergonomics UI with chronological visit histories, live queue status, and secure form validation.',
      es: 'Interfaz ergonómica con historial cronológico, estado de atención en tiempo real y validación segura.',
    },
    results: {
      pt: 'Atendimento mais ágil na recepção e precisão no acompanhamento dos históricos médicos dos pacientes.',
      en: 'Streamlined front-desk check-in and effortless historical record retrieval for medical staff.',
      es: 'Mayor rapidez en recepción y precisión en el seguimiento del historial de pacientes.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'HealthTech UX', 'Vercel Deployment'],
    standards: ['Healthcare UX Standards', 'Data Privacy', 'WCAG AA Accessibility'],
    image: 'https://picsum.photos/seed/mediflow/800/600',
    liveUrl: 'https://mediflow-sooty.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_ebd_ead',
    title: {
      pt: 'EBD EAD - Plataforma de Ensino Bíblico a Distância & Cursos Online',
      en: 'EBD EAD - Online Learning Management System (LMS) for Theological Education',
      es: 'EBD EAD - Plataforma de Educación a Distancia (LMS) y Cursos Bíblicos',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Ambiente virtual de aprendizagem (LMS) para Escola Bíblica e cursos teológicos, com módulos de estudo, aulas em vídeo, materiais para download e controle de progresso.',
      en: 'Digital Learning Management System (LMS) tailored for biblical education, providing structured course tracks, video lessons, downloadable study PDFs, and progress tracking.',
      es: 'Plataforma educativa (LMS) para cursos y estudios bíblicos con módulos de lecciones, videos, materiales en PDF y seguimiento de avance.',
    },
    challenge: {
      pt: 'Estruturar um ambiente didático intuitivo para alunos de todas as idades navegarem pelas lições sem dificuldades técnicas.',
      en: 'Create an intuitive, cross-generational learning portal that facilitates seamless navigation through lesson modules on mobile devices.',
      es: 'Estructurar un entorno didáctico fácil de usar para estudiantes de todas las edades.',
    },
    solution: {
      pt: 'Trilha de aprendizagem sequencial com barra de progresso, player de vídeo responsivo e biblioteca de apostilas digitais.',
      en: 'Developed sequential module tracking with completion meters, responsive video playback, and downloadable resource vaults.',
      es: 'Ruta secuencial de aprendizaje con barra de progreso, reproductor de video responsivo y biblioteca de recursos.',
    },
    results: {
      pt: 'Aumento significativo na frequência e conclusão dos cursos a distância pelos membros e alunos.',
      en: 'Substantial boost in student engagement and course completion rates across online study cohorts.',
      es: 'Mayor participación y porcentaje de finalización de cursos por parte de los alumnos.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'LMS E-Learning Logic', 'Vercel'],
    standards: ['EdTech Usability', 'Responsive Learning', 'Mobile Optimization'],
    image: 'https://picsum.photos/seed/ebd-ead/800/600',
    liveUrl: 'https://ebd-ead.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_nutrifit_lima',
    title: {
      pt: 'NutriFit Lima - Plataforma de Nutrição, Treinos & Saúde Integrada',
      en: 'NutriFit Lima - Nutrition Coaching, Workout Tracking & Health Platform',
      es: 'NutriFit Lima - Plataforma de Nutrición, Entrenamientos y Salud Integral',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Aplicação web para consultoria fitness com calculadoras corporais (IMC, TMB, macros), planos de dieta personalizados e fichas interativas de treino.',
      en: 'Fitness & nutrition web app featuring interactive metabolic calculators (BMI, BMR, Macro breakdown), customizable meal plans, and workout routines.',
      es: 'Aplicación web fitness con calculadoras corporales (IMC, TMB), planes de alimentación personalizados y rutinas interactivas de entrenamiento.',
    },
    challenge: {
      pt: 'Criar cálculos dinâmicos em tempo real e visualização intuitiva das divisões de treino diárias em telas de smartphones.',
      en: 'Implement real-time nutritional calculations and clean mobile-friendly daily workout split representations.',
      es: 'Implementar cálculos metabólicos instantáneos y visualización clara de rutinas en smartphones.',
    },
    solution: {
      pt: 'Módulos de cálculo baseados em equações nutricionais validadas, cronômetro de descanso para séries e layout dinâmico.',
      en: 'Built interactive formula engines for body metrics, exercise rest timers, and categorized nutrition cards.',
      es: 'Fórmulas validadas de métricas corporales, temporizador de descanso y fichas dinámicas de nutrición.',
    },
    results: {
      pt: 'Ferramenta prática e motivadora para acompanhamento diário da rotina saudável dos alunos.',
      en: 'Engaging, practical tool empowering users to maintain consistency in their fitness goals.',
      es: 'Herramienta práctica y motivadora para el seguimiento diario de la salud física.',
    },
    equipment: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Fitness Calculators', 'Vercel'],
    standards: ['Nutritional Math Logic', 'Mobile UI', 'Performance Best Practices'],
    image: 'https://picsum.photos/seed/nutrifit/800/600',
    liveUrl: 'https://nutrifit-lima.vercel.app/',
    highlight: false,
  },
  {
    id: 'proj_minha_radio',
    title: {
      pt: 'Minha Rádio - Portal de Web Rádio & Streaming de Áudio ao Vivo',
      en: 'Minha Rádio - Live Audio Streaming & Interactive Web Radio Portal',
      es: 'Minha Rádio - Portal de Radio Web y Streaming de Audio en Directo',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Portal interativo de transmissão de rádio web com streaming contínuo de baixa latência, grade de programação em tempo real e pedidos de música.',
      en: 'Interactive web radio portal delivering uninterrupted low-latency audio streaming, live schedule programming, song request modules, and social channels.',
      es: 'Portal de radio web con streaming continuo de baja latencia, programación en tiempo real y pedidos de canciones.',
    },
    challenge: {
      pt: 'Garantir reprodução contínua de áudio sem interrupções mesmo durante a navegação entre as páginas e abas do portal.',
      en: 'Maintain continuous audio playback without buffer dropouts or page reload interruptions across route changes.',
      es: 'Garantizar reproducción ininterrumpida de audio durante la navegación en el portal.',
    },
    solution: {
      pt: 'Player persistente integrado com HTML5 Web Audio API, feed de últimas músicas tocadas e integração para pedidos ao vivo.',
      en: 'Persistent global audio player utilizing HTML5 Web Audio API, dynamic playlist feeds, and live listener interaction forms.',
      es: 'Reproductor global persistente con Web Audio API, historial de temas emitidos y formulario de pedidos.',
    },
    results: {
      pt: 'Transmissão estável e interatividade em tempo real com ouvintes conectados em todo o Brasil.',
      en: 'Rock-solid audio broadcast uptime and high interactive engagement with connected listeners.',
      es: 'Transmisión estable e interacción en tiempo real con la audiencia conectada.',
    },
    equipment: ['Next.js', 'TypeScript', 'Web Audio API', 'Streaming Player', 'Vercel Deployment'],
    standards: ['HTML5 Audio Standards', 'Low-Latency Media', 'Responsive Design'],
    image: 'https://picsum.photos/seed/minha-radio/800/600',
    liveUrl: 'https://minha-r-dio.vercel.app/',
    highlight: true,
  },
  {
    id: 'proj_radio_lima_play',
    title: {
      pt: 'Rádio Lima Play - Player Interativo de Streaming & Podcasting',
      en: 'Rádio Lima Play - Immersive Web Audio Player & Podcasting Experience',
      es: 'Rádio Lima Play - Reproductor Inmersivo de Audio y Podcasts',
    },
    category: 'fullstack',
    categoryLabel: {
      pt: 'Desenvolvimento Full-Stack & TI',
      en: 'Full-Stack Software & IT',
      es: 'Desarrollo Full-Stack y TI',
    },
    summary: {
      pt: 'Player moderno de web rádio e podcasting com visualizador de ondas sonoras (Waveform Visualizer), múltiplos canais de transmissão e interface retro-futurista.',
      en: 'Immersive audio player featuring live frequency spectrum visualizers, multi-station switching, volume controls, and modern dark-mode aesthetics.',
      es: 'Reproductor moderno de radio online con visualizador de ondas de sonido, múltiples canales y diseño interactivo.',
    },
    challenge: {
      pt: 'Renderizar o espectro de frequências sonoras em 60fps no navegador sem sobrecarregar o processador do dispositivo do usuário.',
      en: 'Render real-time frequency spectrum animations at 60 FPS via Canvas API without causing CPU throttling on mobile devices.',
      es: 'Renderizar el espectro sonoro a 60 FPS con Canvas sin sobrecargar la CPU del dispositivo.',
    },
    solution: {
      pt: 'Integração de AnalyserNode da Web Audio API com HTML5 Canvas 2D otimizado, suporte a canais alternativos e controles táteis.',
      en: 'Coupled Web Audio API AnalyserNode with hardware-accelerated Canvas rendering and responsive touch controls.',
      es: 'Uso de AnalyserNode de Web Audio API con Canvas 2D optimizado y controles táctiles.',
    },
    results: {
      pt: 'Experiência de áudio imersiva e de alto impacto visual que encanta os ouvintes.',
      en: 'High-impact, immersive listening experience celebrated for visual polish and instant playback response.',
      es: 'Experiencia inmersiva y de alto impacto visual para la reproducción de audio.',
    },
    equipment: ['Next.js', 'TypeScript', 'HTML5 Canvas', 'Web Audio API', 'Vercel Deployment'],
    standards: ['Audio Visualizer Algorithms', '60FPS Performance', 'Mobile Audio Standards'],
    image: 'https://picsum.photos/seed/radio-lima-play/800/600',
    liveUrl: 'https://radio-lima-play.vercel.app/',
    highlight: true,
  },
];

export const PROFESSIONAL_REFERENCES: ProfessionalReferenceItem[] = [
  {
    id: 'ref_antoniel',
    name: 'Antoniel',
    role: {
      pt: 'Encarregado de Manutenção Predial & Facilities',
      en: 'Building Maintenance & Facilities Supervisor',
      es: 'Encargado de Mantenimiento Edilicio y Facilities',
    },
    company: 'JLL (Jones Lang LaSalle)',
    phone: '+55 (11) 97623-0105',
    whatsappNumber: '5511976230105',
    relationship: {
      pt: 'Encarregado direto de manutenção durante a atuação corporativa na JLL Facilities.',
      en: 'Direct maintenance supervisor during corporate operations at JLL Facilities.',
      es: 'Encargado directo de mantenimiento durante la operación corporativa en JLL Facilities.',
    },
    note: {
      pt: 'Contato profissional disponível para recrutadores, empresas e gestores que desejem verificar referências e histórico de desempenho.',
      en: 'Professional contact available for recruiters and hiring managers who wish to verify background and performance references.',
      es: 'Contacto profesional disponible para reclutadores que deseen consultar referencias laborales.',
    },
  },
];

export const TECHNICAL_SKILLS_MATRIX = [
  {
    category: {
      pt: 'Sistemas Elétricos Críticos & Potência',
      en: 'Critical Power & Electrical Systems',
      es: 'Sistemas Eléctricos Críticos y Potencia',
    },
    skills: [
      { name: 'Quadros Gerais de Baixa Tensão (QGBT)', level: 95 },
      { name: 'Grupos Moto-Geradores (GMG / ATS)', level: 90 },
      { name: 'No-Breaks Industriais (UPS & Baterias)', level: 90 },
      { name: 'Termografia Preditiva & Análise Térmica', level: 88 },
      { name: 'Comandos Elétricos & Partida de Motores', level: 92 },
      { name: 'Balanceamento de Cargas e Fases', level: 94 },
    ],
  },
  {
    category: {
      pt: 'Instalações & Infraestrutura Predial',
      en: 'Building Wiring & Infrastructure',
      es: 'Instalaciones e Infraestructura',
    },
    skills: [
      { name: 'Passagem de Cabos, Eletrocalhas e Perfilados', level: 96 },
      { name: 'Iluminação Corporativa LED & Sensores', level: 95 },
      { name: 'Interpretação de Diagramas Unifilares', level: 94 },
      { name: 'Dispositivos de Proteção (DPS, IDR, Disjuntores)', level: 96 },
      { name: 'Sistemas de Aterramento & SPDA', level: 86 },
    ],
  },
  {
    category: {
      pt: 'Manutenção Geral (Civil, Hidráulica & Ar-Condicionado)',
      en: 'General Maintenance (Civil, Hydraulic & HVAC)',
      es: 'Mantenimiento General (Civil, Hidráulica y Clima)',
    },
    skills: [
      { name: 'Bombas de Recalque & Pressurizadores', level: 90 },
      { name: 'Válvulas Redutoras de Pressão & Tubulações', level: 88 },
      { name: 'Ar-Condicionado, Troca de Filtros e Limpeza', level: 86 },
      { name: 'Reparos em Drywall, Gesso & Alvenaria', level: 85 },
      { name: 'Pintura Técnica Predial e Epóxi', level: 90 },
      { name: 'Piso Elevado & Acabamentos Corporativos', level: 86 },
    ],
  },
  {
    category: {
      pt: 'Segurança Operacional & Normas Regulamentadoras',
      en: 'Workplace Safety & Standards',
      es: 'Seguridad Operacional y Normas',
    },
    skills: [
      { name: 'NR-10 (Segurança em Eletricidade)', level: 100 },
      { name: 'NR-10 SEP (Sistema Elétrico de Potência)', level: 100 },
      { name: 'NR-35 (Trabalho Seguro em Altura)', level: 100 },
      { name: 'NR-20 (Inflamáveis e Combustíveis)', level: 100 },
      { name: 'NR-12 (Máquinas e Equipamentos)', level: 100 },
      { name: 'NR-18 (Construção Civil)', level: 100 },
      { name: 'NR-6 (Equipamentos de Proteção Individual)', level: 100 },
      { name: 'Procedimento de Bloqueio e Etiquetagem (LOTO)', level: 100 },
      { name: 'SLA de Atendimento & Gestão via CMMS', level: 95 },
    ],
  },
  {
    category: {
      pt: 'Tecnologia da Informação & Desenvolvimento Full-Stack',
      en: 'Information Technology & Full-Stack Development',
      es: 'Tecnología de la Información y Desarrollo Full-Stack',
    },
    skills: [
      { name: 'Desenvolvimento Web & Mobile Responsivo', level: 90 },
      { name: 'APIs REST & Gateways de Pagamento (Stripe, Mercado Pago)', level: 88 },
      { name: 'Bancos de Dados (MongoDB, Firebase Firestore, Supabase)', level: 86 },
      { name: 'Cloud & Ambientes de Nuvem (Firebase Studio, Hostinger)', level: 85 },
      { name: 'Desenvolvimento No-Code e Ferramentas Modernas', level: 90 },
      { name: 'Pacote Office e Gestão de Documentos', level: 95 },
    ],
  },
];

export const I18N_STRINGS = {
  pt: {
    nav: {
      summary: 'Resumo',
      about: 'Qualificações',
      experience: 'Experiência & Trajetória',
      projects: 'Galeria de Projetos',
      diagnostic: 'Calculadora & IA',
      references: 'Referências Profissionais',
      contact: 'Contato',
      downloadCv: 'Baixar Currículo PDF',
    },
    hero: {
      badge: 'Oficial de Manutenção Elétrica & Desenvolvedor Full-Stack',
      headline: 'Excelência em Manutenção Crítica, Infraestrutura & Desenvolvimento Full-Stack',
      subheadline: 'Profissional com sólida vivência técnica em infraestrutura predial, sistemas elétricos, geradores, UPS e ar-condicionado na ATS/JLL, aliada a competências práticas em desenvolvimento de software web moderno (TypeScript, Next.js, Node.js, Bancos de Dados e APIs).',
      ctaProjects: 'Ver Galeria de Projetos',
      ctaContact: 'Falar no WhatsApp / E-mail',
      ctaDownloadCv: 'Baixar Currículo Completo (PDF)',
      stat1Label: 'Atuação Corporativa',
      stat1Val: 'ATS & JLL Facilities',
      stat2Label: 'Formação Técnica',
      stat2Val: 'Eletrotécnica & TI',
      stat3Label: 'Normas de Segurança',
      stat3Val: 'NR-10, NR-35 & NRs',
      stat4Label: 'Competência Dupla',
      stat4Val: 'Manutenção + Software',
      verifiedBadge: 'Experiência ATS & JLL Comprovada',
    },
    about: {
      sectionTitle: 'Sobre Mim & Qualificações Técnicas',
      sectionSubtitle: 'Rigor técnico, mentalidade preventiva, segurança do trabalho e domínio de tecnologias web modernas.',
      educationTitle: 'Formação Acadêmica & Técnica',
      certificationsTitle: 'Certificações & Habilitações de Segurança',
      skillsTitle: 'Matriz de Competências Práticas',
      philosophyTitle: 'Compromisso com a Segurança, Qualidade e Inovação',
      philosophyText: 'A manutenção eficiente e o desenvolvimento de software compartilham os mesmos pilares fundamentais: atenção aos detalhes, prevenção de falhas antes que ocorram, padrões estritos de qualidade e foco em garantir a continuidade das operações com máxima segurança.',
    },
    experience: {
      sectionTitle: 'Trajetória Profissional',
      sectionSubtitle: 'Experiência prática comprovada em operações prediais corporativas, infraestrutura crítica e manutenções especializadas.',
      keyResponsibilities: 'Principais Responsabilidades & Entregas',
      technologiesUsed: 'Equipamentos & Tecnologias',
    },
    projects: {
      sectionTitle: 'Galeria de Projetos & Soluções Práticas',
      sectionSubtitle: 'Filtre por categoria técnica (Elétrica, Geradores, CMMS Full-Stack, Hidráulica, Civil/Pintura) ou pesquise por termo.',
      searchPlaceholder: 'Buscar por equipamento, tecnologia ou norma (ex: QGBT, Next.js, Gerador, NR-10, TypeScript)...',
      allCategories: 'Todos os Projetos',
      catElectrical: 'Painéis & Elétrica',
      catGenerators: 'Geradores & UPS',
      catPredictive: 'Preditiva & Termografia',
      catHydraulic: 'Hidráulica & Bombas',
      catCivil: 'Civil & Pintura',
      catFullStack: 'Desenvolvimento Full-Stack & TI',
      viewDetails: 'Ver Detalhes Técnicos',
      modalChallenge: 'Desafio / Situação Encontrada',
      modalSolution: 'Intervenção Técnica & Solução',
      modalResults: 'Resultado Operacional & Benefícios',
      modalEquipment: 'Equipamentos, Tecnologias & Ferramentas',
      modalStandards: 'Normas & Padrões Aplicados',
      closeModal: 'Fechar',
      noProjectsFound: 'Nenhum projeto encontrado para esta busca.',
    },
    diagnostic: {
      sectionTitle: 'Assistente Técnico & Calculadora de Manutenção',
      sectionSubtitle: 'Ferramentas práticas para estimativa de condutores e consulta inteligente sobre escopo de manutenção.',
      calcTab: 'Dimensionamento Rápido de Condutores (NBR 5410)',
      aiTab: 'Assistente de Escopo & Normas (IA)',
      calcCurrentLabel: 'Corrente de Projeto (A):',
      calcVoltageLabel: 'Tensão de Alimentação:',
      calcDistanceLabel: 'Distância do Circuito (metros):',
      calcPowerLabel: 'Potência Total da Carga (Watts):',
      calcVoltageDropLimit: 'Queda de Tensão Máxima Permitida (%):',
      calcResultSection: 'Resultado do Pré-Dimensionamento:',
      calcMinGauge: 'Bitola Recomendada (Cobre):',
      calcBreaker: 'Disjuntor de Proteção Sugerido:',
      calcDropActual: 'Queda de Tensão Estimada:',
      calcNote: '*Estimativa referencial baseada no critério da capacidade de condução de corrente e queda de tensão conforme NBR 5410 para cabos de cobre isolados em PVC/EPR em eletroduto embutido.',
      aiPlaceholder: 'Ex: Qual a frequência recomendada para teste com carga de geradores a diesel? Ou: Como o Allan executa o bloqueio LOTO em um QGBT?',
      aiButton: 'Consultar Assistente Técnico',
      aiSample1: 'Como funciona o teste mensal de gerador e UPS?',
      aiSample2: 'Quais os cuidados de segurança da NR-10 em painéis?',
      aiSample3: 'Qual a experiência do Allan com bombas e hidráulica?',
      aiLoading: 'Analisando normas e escopo técnico...',
    },
    references: {
      badge: 'Referência Profissional & Recrutadores',
      sectionTitle: 'Referência Profissional para Recrutadores',
      sectionSubtitle: 'Contato direto do encarregado de manutenção na JLL para consulta e validação de histórico profissional.',
      verifiedStatus: 'Encarregado JLL Confirmado',
      contactOnWhatsApp: 'Falar com Encarregado no WhatsApp',
      directContactBtn: 'Falar com Referência no WhatsApp',
      phoneLabel: 'Telefone:',
      roleLabel: 'Cargo:',
      companyLabel: 'Empresa:',
      relationshipLabel: 'Relação Profissional:',
    },
    resume: {
      downloadPdfButton: 'Baixar Currículo (PDF)',
      viewCvButton: 'Visualizar Currículo Online',
      modalTitle: 'Currículo Técnico Profissional',
      modalSubtitle: 'Allan Luiz Silveira Lima - Oficial de Manutenção Elétrica, Predial & Desenvolvedor Full-Stack',
      printAction: 'Imprimir / Salvar como PDF',
      closeAction: 'Fechar',
      summaryTitle: 'Perfil Profissional',
      experienceTitle: 'Experiência Profissional',
      educationTitle: 'Formação Acadêmica & Técnica',
      certificationsTitle: 'Certificações de Segurança',
      technicalSkillsTitle: 'Habilidades Técnicas',
    },
    contact: {
      sectionTitle: 'Contato Direto & Oportunidades',
      sectionSubtitle: 'Entre em contato para oportunidades de contratação em Manutenção Predial/Elétrica ou Desenvolvimento Full-Stack.',
      formName: 'Seu Nome / Nome da Empresa',
      formEmail: 'Seu E-mail de Contato',
      formPhone: 'Telefone / WhatsApp',
      formType: 'Tipo de Demanda',
      typeJob: 'Oportunidade de Emprego / Contratação (CLT/PJ)',
      typeEmergency: 'Manutenção Preventiva / Corretiva em Instalações',
      typeConsulting: 'Desenvolvimento de Software / Projeto Web / Consultoria',
      formMessage: 'Mensagem ou Detalhes da Oportunidade',
      submitButton: 'Enviar Mensagem Direta',
      submitting: 'Enviando mensagem...',
      successTitle: 'Mensagem Enviada com Sucesso!',
      successDesc: 'Obrigado pelo contato. Allan Luiz responderá diretamente ao seu e-mail ou WhatsApp o mais breve possível.',
      whatsappDirect: 'Falar no WhatsApp (+55 11 91577-7803)',
      linkedinDirect: 'Acessar Perfil no LinkedIn',
      emailDirect: 'Enviar E-mail Direto',
      coverageArea: 'Área de Atendimento & Modalidade',
      coverageDesc: 'São Paulo (Capital), Região Metropolitana, Grande ABC. Disponível para atuação presencial, híbrida ou remota.',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      quote: 'Excelência técnica, segurança irrestrita e compromisso com a continuidade das suas operações e sistemas.',
      backToTop: 'Voltar ao Topo',
    }
  },
  en: {
    nav: {
      summary: 'Summary',
      about: 'Qualifications',
      experience: 'Experience',
      projects: 'Work Gallery',
      diagnostic: 'Calculator & AI',
      references: 'Professional References',
      contact: 'Contact',
      downloadCv: 'Download Resume (PDF)',
    },
    hero: {
      badge: 'Maintenance Specialist & Full-Stack Developer',
      headline: 'Safety, Operational Reliability & Full-Stack Web Development',
      subheadline: 'Certified Electrotechnics Technician with proven track record at ATS and JLL in critical power, generators, UPS, and HVAC, combined with hands-on full-stack web software development skills (TypeScript, Next.js, Node.js, Databases & APIs).',
      ctaProjects: 'Explore Work Gallery',
      ctaContact: 'Contact via WhatsApp / Email',
      ctaDownloadCv: 'Download Complete Resume (PDF)',
      stat1Label: 'Corporate Experience',
      stat1Val: 'ATS & JLL Facilities',
      stat2Label: 'Technical Degree',
      stat2Val: 'Electrotechnics & IT',
      stat3Label: 'Safety Standards',
      stat3Val: 'NR-10, NR-35 & NRs',
      stat4Label: 'Dual Competence',
      stat4Val: 'Maintenance + Software',
      verifiedBadge: 'Proven ATS & JLL Experience',
    },
    about: {
      sectionTitle: 'About Me & Technical Qualifications',
      sectionSubtitle: 'Technical rigor, preventive mindset, strict compliance with safety protocols, and modern web software development.',
      educationTitle: 'Academic & Technical Education',
      certificationsTitle: 'Safety Certifications & Accreditations',
      skillsTitle: 'Core Practical Competencies',
      philosophyTitle: 'Commitment to Safety, Quality & Operational Continuity',
      philosophyText: 'Proactive maintenance and robust software development share the same foundation: meticulous attention to detail, preventing failures before they happen, and ensuring system continuity with maximum reliability.',
    },
    experience: {
      sectionTitle: 'Professional Experience',
      sectionSubtitle: 'Proven hands-on execution in corporate real estate, critical power systems, and specialized facilities.',
      keyResponsibilities: 'Key Responsibilities & Deliverables',
      technologiesUsed: 'Equipment & Technologies',
    },
    projects: {
      sectionTitle: 'Featured Projects & Work Gallery',
      sectionSubtitle: 'Filter by technical domain (Electrical, Generators, Full-Stack CMMS, Hydraulics, Civil) or search by keyword.',
      searchPlaceholder: 'Search by equipment, tech stack or code (e.g. QGBT, Next.js, Generator, NR-10, TypeScript)...',
      allCategories: 'All Projects',
      catElectrical: 'Panels & Electrical',
      catGenerators: 'Generators & UPS',
      catPredictive: 'Predictive & Thermal',
      catHydraulic: 'Plumbing & Pumps',
      catCivil: 'Civil & Painting',
      catFullStack: 'Full-Stack Software & IT',
      viewDetails: 'View Technical Details',
      modalChallenge: 'Challenge / Initial Condition',
      modalSolution: 'Technical Intervention & Solution',
      modalResults: 'Operational Results & Benefits',
      modalEquipment: 'Equipment, Tech Stack & Tools',
      modalStandards: 'Applied Standards',
      closeModal: 'Close',
      noProjectsFound: 'No projects matched your search criteria.',
    },
    diagnostic: {
      sectionTitle: 'Technical Assistant & Maintenance Calculator',
      sectionSubtitle: 'Practical tools for electrical cable sizing and instant inquiry on maintenance protocols.',
      calcTab: 'Fast Wire Sizing Calculator (NBR 5410)',
      aiTab: 'AI Technical Scope & Standards Assistant',
      calcCurrentLabel: 'Design Current (Amps):',
      calcVoltageLabel: 'System Voltage:',
      calcDistanceLabel: 'Circuit Run Length (meters):',
      calcPowerLabel: 'Total Load Power (Watts):',
      calcVoltageDropLimit: 'Max Allowed Voltage Drop (%):',
      calcResultSection: 'Preliminary Sizing Results:',
      calcMinGauge: 'Recommended Copper Wire Gauge:',
      calcBreaker: 'Suggested Breaker Protection:',
      calcDropActual: 'Estimated Voltage Drop:',
      calcNote: '*Preliminary estimation based on continuous ampacity and voltage drop criteria (NBR 5410 standards for copper conductors in conduit).',
      aiPlaceholder: 'E.g., What is the recommended load-testing routine for backup generators? Or: How does Allan implement LOTO lockout on distribution panels?',
      aiButton: 'Ask Technical Assistant',
      aiSample1: 'How does monthly generator & UPS load testing work?',
      aiSample2: 'What are the main NR-10 safety protocols in live panels?',
      aiSample3: 'What is Allan’s experience with hydraulic booster pumps?',
      aiLoading: 'Analyzing technical standards and maintenance scope...',
    },
    references: {
      badge: 'Recruiter Reference Contact',
      sectionTitle: 'Professional Reference for Recruiters',
      sectionSubtitle: 'Direct contact of former Maintenance Supervisor at JLL for background verification and technical inquiry.',
      verifiedStatus: 'Verified JLL Supervisor',
      contactOnWhatsApp: 'Chat with Supervisor on WhatsApp',
      directContactBtn: 'Chat with Reference on WhatsApp',
      phoneLabel: 'Phone:',
      roleLabel: 'Role:',
      companyLabel: 'Company:',
      relationshipLabel: 'Professional Relationship:',
    },
    resume: {
      downloadPdfButton: 'Download Resume (PDF)',
      viewCvButton: 'View Resume Online',
      modalTitle: 'Technical Professional Resume',
      modalSubtitle: 'Allan Luiz Silveira Lima - Maintenance Specialist & Full-Stack Developer',
      printAction: 'Print / Save as PDF',
      closeAction: 'Close',
      summaryTitle: 'Professional Profile',
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education & Technical Degree',
      certificationsTitle: 'Safety Certifications',
      technicalSkillsTitle: 'Technical Skills',
    },
    contact: {
      sectionTitle: 'Direct Contact & Opportunities',
      sectionSubtitle: 'Get in touch for employment opportunities in Facilities/Electrical Maintenance or Full-Stack Web Development.',
      formName: 'Your Name / Company Name',
      formEmail: 'Your Contact Email',
      formPhone: 'Phone / WhatsApp',
      formType: 'Inquiry Type',
      typeJob: 'Job / Employment Opportunity (Full-Time/Contract)',
      typeEmergency: 'Preventive / Corrective Facility Maintenance',
      typeConsulting: 'Software Development / Web Platform Project',
      formMessage: 'Message or Opportunity Details',
      submitButton: 'Send Direct Message',
      submitting: 'Sending message...',
      successTitle: 'Message Sent Successfully!',
      successDesc: 'Thank you for reaching out. Allan Luiz will reply directly as soon as possible.',
      whatsappDirect: 'Chat on WhatsApp (+55 11 91577-7803)',
      linkedinDirect: 'View LinkedIn Profile',
      emailDirect: 'Send Direct Email',
      coverageArea: 'Service Area & Work Mode',
      coverageDesc: 'São Paulo (Capital), Metropolitan Area, ABC Region. Available for on-site, hybrid, or remote engagements.',
    },
    footer: {
      rights: 'All rights reserved.',
      quote: 'Technical excellence, zero safety compromises, and dedication to your operational and digital continuity.',
      backToTop: 'Back to Top',
    }
  },
  es: {
    nav: {
      summary: 'Resumen',
      about: 'Cualificaciones',
      experience: 'Trayectoria',
      projects: 'Galería de Proyectos',
      diagnostic: 'Calculadora e IA',
      references: 'Referencias Profesionales',
      contact: 'Contacto',
      downloadCv: 'Descargar CV (PDF)',
    },
    hero: {
      badge: 'Oficial de Mantenimiento & Desarrollador Full-Stack',
      headline: 'Seguridad, Alta Confiabilidad y Desarrollo de Software Full-Stack',
      subheadline: 'Técnico en Electrotecnia con sólida trayectoria en ATS y JLL en infraestructuras críticas, grupos electrógenos, SAI/UPS y climatización, combinada con desarrollo de software web full-stack (TypeScript, Next.js, Node.js y APIs).',
      ctaProjects: 'Ver Galería de Proyectos',
      ctaContact: 'Contactar por WhatsApp / Correo',
      ctaDownloadCv: 'Descargar CV Completo (PDF)',
      stat1Label: 'Experiencia Corporativa',
      stat1Val: 'ATS & JLL Facilities',
      stat2Label: 'Formación Técnica',
      stat2Val: 'Electrotecnia y TI',
      stat3Label: 'Normas de Seguridad',
      stat3Val: 'NR-10, NR-35 y NRs',
      stat4Label: 'Doble Competencia',
      stat4Val: 'Mantenimiento + Software',
      verifiedBadge: 'Experiencia ATS & JLL Comprobada',
    },
    about: {
      sectionTitle: 'Sobre Mí y Cualificaciones Técnicas',
      sectionSubtitle: 'Rigor técnico, mentalidad preventiva, estricto cumplimiento normativo y desarrollo web moderno.',
      educationTitle: 'Formación Académica y Técnica',
      certificationsTitle: 'Certificaciones de Seguridad',
      skillsTitle: 'Matriz de Competencias Prácticas',
      philosophyTitle: 'Compromiso con la Seguridad, Calidad e Innovación',
      philosophyText: 'El mantenimiento eficaz y el software robusto comparten el mismo principio: meticulosa atención a los detalles, prevención de incidentes y garantía de continuidad operativa con la más alta seguridad.',
    },
    experience: {
      sectionTitle: 'Trayectoria Profesional',
      sectionSubtitle: 'Experiencia práctica demostrada en edificios corporativos de alto estándar, infraestructuras críticas e instalaciones.',
      keyResponsibilities: 'Principales Responsabilidades y Logros',
      technologiesUsed: 'Equipos y Tecnologías',
    },
    projects: {
      sectionTitle: 'Galería de Proyectos y Soluciones Prácticas',
      sectionSubtitle: 'Filtre por categoría técnica (Eléctrica, Generadores, CMMS Full-Stack, Hidráulica, Civil/Pintura) o busque por palabra clave.',
      searchPlaceholder: 'Buscar por equipo, tecnología o norma (ej: QGBT, Next.js, Generador, NR-10, TypeScript)...',
      allCategories: 'Todos los Proyectos',
      catElectrical: 'Cuadros y Eléctrica',
      catGenerators: 'Generadores y SAI',
      catPredictive: 'Predictivo y Térmico',
      catHydraulic: 'Fontanería y Bombas',
      catCivil: 'Civil y Pintura',
      catFullStack: 'Desarrollo Full-Stack y TI',
      viewDetails: 'Ver Detalles Técnicos',
      modalChallenge: 'Desafío / Situación Inicial',
      modalSolution: 'Intervenção Técnica y Solución',
      modalResults: 'Resultados Operativos y Beneficios',
      modalEquipment: 'Equipos, Tecnologías y Herramientas',
      modalStandards: 'Normas Aplicadas',
      closeModal: 'Cerrar',
      noProjectsFound: 'No se encontraron proyectos para esta búsqueda.',
    },
    diagnostic: {
      sectionTitle: 'Asistente Técnico y Calculadora de Mantenimiento',
      sectionSubtitle: 'Herramientas prácticas para cálculo de conductores y consulta inteligente sobre protocolos de mantenimiento.',
      calcTab: 'Cálculo Rápido de Conductores (NBR 5410)',
      aiTab: 'Asistente Técnico y Normativo (IA)',
      calcCurrentLabel: 'Corriente de Diseño (A):',
      calcVoltageLabel: 'Tensión de Suministro:',
      calcDistanceLabel: 'Longitud del Circuito (metros):',
      calcPowerLabel: 'Potencia Total de Carga (Watts):',
      calcVoltageDropLimit: 'Caída de Tensión Máxima (%):',
      calcResultSection: 'Resultados del Predimensionado:',
      calcMinGauge: 'Sección Recomendada (Cobre):',
      calcBreaker: 'Disyuntor Sugerido:',
      calcDropActual: 'Caída de Tensión Estimada:',
      calcNote: '*Estimación referencial basada en capacidad de conducción de corriente y caída de tensión según normativa para cables de cobre en conducto.',
      aiPlaceholder: 'Ej: ¿Cuál es la rutina recomendada para prueba de generadores? O: ¿Cómo aplica Allan el bloqueo LOTO?',
      aiButton: 'Consultar Asistente Técnico',
      aiSample1: '¿Cómo funciona la prueba mensual de generador y SAI?',
      aiSample2: '¿Cuáles son las medidas de seguridad de la NR-10?',
      aiSample3: '¿Cuál es la experiencia de Allan con bombas hidráulicas?',
      aiLoading: 'Analizando normas y protocolos técnicos...',
    },
    references: {
      badge: 'Contacto de Referencia para Reclutadores',
      sectionTitle: 'Referencia Profesional para Reclutadores',
      sectionSubtitle: 'Contacto directo de supervisor de mantenimiento en JLL para verificación de antecedentes laborales.',
      verifiedStatus: 'Supervisor JLL Verificado',
      contactOnWhatsApp: 'Contactar Supervisor por WhatsApp',
      directContactBtn: 'Contactar Referencia por WhatsApp',
      phoneLabel: 'Teléfono:',
      roleLabel: 'Cargo:',
      companyLabel: 'Empresa:',
      relationshipLabel: 'Relación Profesional:',
    },
    resume: {
      downloadPdfButton: 'Descargar CV (PDF)',
      viewCvButton: 'Ver CV Online',
      modalTitle: 'Currículum Técnico Profesional',
      modalSubtitle: 'Allan Luiz Silveira Lima - Oficial de Mantenimiento & Desarrollador Full-Stack',
      printAction: 'Imprimir / Guardar como PDF',
      closeAction: 'Cerrar',
      summaryTitle: 'Perfil Profesional',
      experienceTitle: 'Experiencia Profesional',
      educationTitle: 'Formación Académica y Técnica',
      certificationsTitle: 'Certificaciones de Seguridad',
      technicalSkillsTitle: 'Habilidades Técnicas',
    },
    contact: {
      sectionTitle: 'Contacto Directo y Oportunidades',
      sectionSubtitle: 'Póngase en contacto para contrataciones en Mantenimiento o Desarrollo de Software Full-Stack.',
      formName: 'Su Nombre / Empresa',
      formEmail: 'Su Correo Electrónico',
      formPhone: 'Teléfono / WhatsApp',
      formType: 'Tipo de Consulta',
      typeJob: 'Oportunidad de Empleo / Contratación (CLT/PJ)',
      typeEmergency: 'Mantenimiento Preventivo / Correctivo',
      typeConsulting: 'Desarrollo de Software / Plataforma Web',
      formMessage: 'Mensaje o Detalles de la Oportunidad',
      submitButton: 'Enviar Mensaje Directo',
      submitting: 'Enviando mensaje...',
      successTitle: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Gracias por su contacto. Allan Luiz responderá directamente lo antes posible.',
      whatsappDirect: 'Conversar por WhatsApp (+55 11 91577-7803)',
      linkedinDirect: 'Ver Perfil en LinkedIn',
      emailDirect: 'Enviar Correo Directo',
      coverageArea: 'Zona de Cobertura y Modalidad',
      coverageDesc: 'São Paulo (Capital), Región Metropolitana y ABC. Disponible para modalidad presencial, híbrida o remota.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      quote: 'Excelencia técnica, máxima seguridad y compromiso con la continuidad operativa y digital.',
      backToTop: 'Volver Arriba',
    }
  }
};
