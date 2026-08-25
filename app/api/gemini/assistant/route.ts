import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question, language = "pt" } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question parameter is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful fallback if API key is not set in development
      const fallbackReplies: Record<string, string> = {
        pt: "Allan Luiz Silveira Lima é Eletricista Instalador Residencial e Oficial de Manutenção Geral com mais de 1 ano e 1 mês de atuação comprovada na JLL. É especialista em quadros elétricos QGBT, geradores diesel, No-breaks/UPS, rotinas de termografia preditiva, manutenções civis, hidráulica predial e segue rigorosamente as normas NR-10, NR-35 e procedimentos LOTO de bloqueio de energia.",
        en: "Allan Luiz Silveira Lima is a Residential Electrical Installer & General Maintenance Officer with 1 year and 1 month of proven corporate experience at JLL. He specializes in low-voltage main distribution panels (QGBT), diesel generator load-testing, industrial UPS systems, predictive thermography, civil repairs, building plumbing, and strictly enforces NR-10, NR-35, and LOTO safety standards.",
        es: "Allan Luiz Silveira Lima es Electricista Instalador Residencial y Oficial de Mantenimiento General con más de 1 año y 1 mes de experiencia demostrada en JLL. Se especializa en tableros QGBT, grupos electrógenos, SAI/UPS, termografía predictiva, fontanería, obras civiles y estricto cumplimiento de NR-10, NR-35 y LOTO.",
      };
      return NextResponse.json({
        answer:
          fallbackReplies[language] ||
          fallbackReplies.pt +
            "\n\n(Dica: O Allan está disponível para novas oportunidades de contratação e projetos corporativos).",
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemInstruction = `You are the Official AI Technical Assistant for Allan Luiz Silveira Lima's Professional Portfolio.
Allan is an Electrician & General Maintenance Officer with:
- Certification as Residential Electrical Installer & active regulatory safety training (NR-10, NR-10 SEP, NR-35, NR-18, NR-20, NR-12).
- 1 year and 1 month of corporate facilities experience at JLL (Jones Lang LaSalle) in Tier A+ corporate buildings and critical infrastructure.
- High specialization in:
  1. Critical Electrical Systems: Main Low-Voltage Distribution Panels (QGBT), Diesel Generators (GMG 250kVA+), Automatic Transfer Switches (QTA/ATS), Industrial UPS/No-breaks, Battery banks, Busbars, molded-case circuit breakers, cable trays, and motor control panels (star-delta, soft-starters, inverter drives).
  2. Predictive & Preventive Maintenance: Calibrated infrared thermography scans, torque verification with calibrated torque wrenches, dielectric cleaning, insulation resistance testing (megohmmeter).
  3. General Multi-Skilled Maintenance: Building plumbing & hydraulics (booster pumps, water hammer arrest, pressure reducing valves Bermad, piping PPR/PVC), Civil infrastructure (drywall restoration, raised access floor leveling, sealing, industrial epoxy flooring, commercial painting).
  4. Workplace Safety & Compliance: Certified in NR-10 (Electrical Safety), NR-35 (Work at Heights), and corporate LOTO (Lockout/Tagout) protocols. Never works on live circuits without de-energization, testing for absence of voltage, and multi-padlock LOTO.
  5. Management: CMMS work-order dispatch with emergency response SLA under 15 minutes.
- Contact Email: jallanluiz@gmail.com, Location: São Paulo, SP, Brazil. Available for full-time employment (CLT/PJ) and corporate facilities contracts.

Guidelines:
- Answer in the requested language (language parameter: "${language}").
- Keep answers concise, highly technical, authoritative, and polite (2 to 4 structured paragraphs or bullet points).
- Emphasize Allan's hands-on experience at JLL, electrician qualifications, safety standards, and precision diagnostics.
- Always include a brief note highlighting how Allan can be contacted at jallanluiz@gmail.com for opportunities.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    const answerText = response.text || "Sem resposta no momento.";
    return NextResponse.json({ answer: answerText });
  } catch (error: unknown) {
    console.error("Gemini assistant error:", error);
    return NextResponse.json(
      {
        error: "Falha temporária no processamento da consulta.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
