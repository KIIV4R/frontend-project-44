#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateQuestion, rules } from '../src/games/progression.js';

runGame(rules, generateQuestion);
