import { part01 } from "./knowledge/01-foundations-financial-literacy.js";
import { part02 } from "./knowledge/02-markets-macroeconomics-technical-smc-ict-risk.js";
import { part03 } from "./knowledge/03-banking-credit-family-business.js";
import { part04 } from "./knowledge/04-tax-equity-fundamentals-sharia-crypto.js";
import { part05 } from "./knowledge/05-global-macro-monetary-currency.js";
import { part06 } from "./knowledge/06-portfolio-valuation-commodities.js";
import { part07 } from "./knowledge/07-corporate-finance-unit-economics-market-structure.js";
import { part08 } from "./knowledge/08-time-value-wealth-tax-bias.js";
import { part09 } from "./knowledge/09-derivatives-microstructure-wyckoff-risk.js";
import { part10 } from "./knowledge/10-defi-tokenomics-crisis-modern-economy.js";
import { part11 } from "./knowledge/11-financial-psychology-money-behavior-trading.js";
import { part12 } from "./knowledge/12-decision-psychology-financial-reality-self-control.js";
import { part13 } from "./knowledge/13-crypto-futures-onchain-layer2.js";
import { part14 } from "./knowledge/14-staking-restaking-mev-web3-security-dyor.js";

// Seluruh bagian digabungkan dalam urutan yang sama seperti file sumber.
export const knowledge = [
  ...part01,
  ...part02,
  ...part03,
  ...part04,
  ...part05,
  ...part06,
  ...part07,
  ...part08,
  ...part09,
  ...part10,
  ...part11,
  ...part12,
  ...part13,
  ...part14
];

export const knowledgeStats = Object.freeze({
  groups: 14,
  entries: 270
});
