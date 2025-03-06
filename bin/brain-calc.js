#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateQuestion, rules } from '../src/games/calc.js';

runGame(rules, generateQuestion);
