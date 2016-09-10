function rgb(r, g, b) {
  return {
    "r": r,
    "g": g,
    "b": b
  };
}

// Decompiled from the Terraria source code

var tileColors = new Array(463);
var liquidColors = new Array(3);
var wallColors = new Array(231);

for (var i = 0; i < tileColors.length; i++) {
  tileColors[i] = new Array(12);
}

var color = rgb(151, 107, 75);
tileColors[0][0] = color;
tileColors[5][0] = color;
tileColors[30][0] = color;
tileColors[191][0] = color;
tileColors[272][0] = rgb(121, 119, 101);
color = rgb(128, 128, 128);
tileColors[1][0] = color;
tileColors[38][0] = color;
tileColors[48][0] = color;
tileColors[130][0] = color;
tileColors[138][0] = color;
tileColors[273][0] = color;
tileColors[283][0] = color;
tileColors[2][0] = rgb(28, 216, 94);
color = rgb(26, 196, 84);
tileColors[3][0] = color;
tileColors[192][0] = color;
tileColors[73][0] = rgb(27, 197, 109);
tileColors[52][0] = rgb(23, 177, 76);
tileColors[353][0] = rgb(28, 216, 94);
tileColors[20][0] = rgb(163, 116, 81);
tileColors[6][0] = rgb(140, 101, 80);
color = rgb(150, 67, 22);
tileColors[7][0] = color;
tileColors[47][0] = color;
tileColors[284][0] = color;
color = rgb(185, 164, 23);
tileColors[8][0] = color;
tileColors[45][0] = color;
color = rgb(185, 194, 195);
tileColors[9][0] = color;
tileColors[46][0] = color;
color = rgb(98, 95, 167);
tileColors[22][0] = color;
tileColors[140][0] = color;
tileColors[23][0] = rgb(141, 137, 223);
tileColors[24][0] = rgb(122, 116, 218);
tileColors[25][0] = rgb(109, 90, 128);
tileColors[37][0] = rgb(104, 86, 84);
tileColors[39][0] = rgb(181, 62, 59);
tileColors[40][0] = rgb(146, 81, 68);
tileColors[41][0] = rgb(66, 84, 109);
tileColors[43][0] = rgb(84, 100, 63);
tileColors[44][0] = rgb(107, 68, 99);
tileColors[53][0] = rgb(186, 168, 84);
color = rgb(190, 171, 94);
tileColors[151][0] = color;
tileColors[154][0] = color;
tileColors[274][0] = color;
tileColors[328][0] = rgb(200, 246, 254);
tileColors[329][0] = rgb(15, 15, 15);
tileColors[54][0] = rgb(200, 246, 254);
tileColors[56][0] = rgb(43, 40, 84);
tileColors[75][0] = rgb(26, 26, 26);
tileColors[57][0] = rgb(68, 68, 76);
color = rgb(142, 66, 66);
tileColors[58][0] = color;
tileColors[76][0] = color;
color = rgb(92, 68, 73);
tileColors[59][0] = color;
tileColors[120][0] = color;
tileColors[60][0] = rgb(143, 215, 29);
tileColors[61][0] = rgb(135, 196, 26);
tileColors[74][0] = rgb(96, 197, 27);
tileColors[62][0] = rgb(121, 176, 24);
tileColors[233][0] = rgb(107, 182, 29);
tileColors[63][0] = rgb(110, 140, 182);
tileColors[64][0] = rgb(196, 96, 114);
tileColors[65][0] = rgb(56, 150, 97);
tileColors[66][0] = rgb(160, 118, 58);
tileColors[67][0] = rgb(140, 58, 166);
tileColors[68][0] = rgb(125, 191, 197);
tileColors[70][0] = rgb(93, 127, 255);
color = rgb(182, 175, 130);
tileColors[71][0] = color;
tileColors[72][0] = color;
tileColors[190][0] = color;
color = rgb(73, 120, 17);
tileColors[80][0] = color;
tileColors[188][0] = color;
color = rgb(11, 80, 143);
tileColors[107][0] = color;
tileColors[121][0] = color;
color = rgb(91, 169, 169);
tileColors[108][0] = color;
tileColors[122][0] = color;
color = rgb(128, 26, 52);
tileColors[111][0] = color;
tileColors[150][0] = color;
tileColors[109][0] = rgb(78, 193, 227);
tileColors[110][0] = rgb(48, 186, 135);
tileColors[113][0] = rgb(48, 208, 234);
tileColors[115][0] = rgb(33, 171, 207);
tileColors[112][0] = rgb(103, 98, 122);
color = rgb(238, 225, 218);
tileColors[116][0] = color;
tileColors[118][0] = color;
tileColors[117][0] = rgb(181, 172, 190);
tileColors[119][0] = rgb(107, 92, 108);
tileColors[123][0] = rgb(106, 107, 118);
tileColors[124][0] = rgb(73, 51, 36);
tileColors[131][0] = rgb(52, 52, 52);
tileColors[145][0] = rgb(192, 30, 30);
tileColors[146][0] = rgb(43, 192, 30);
color = rgb(211, 236, 241);
tileColors[147][0] = color;
tileColors[148][0] = color;
tileColors[152][0] = rgb(128, 133, 184);
tileColors[153][0] = rgb(239, 141, 126);
tileColors[155][0] = rgb(131, 162, 161);
tileColors[156][0] = rgb(170, 171, 157);
tileColors[157][0] = rgb(104, 100, 126);
color = rgb(145, 81, 85);
tileColors[158][0] = color;
tileColors[232][0] = color;
tileColors[159][0] = rgb(148, 133, 98);
tileColors[160][0] = rgb(200, 0, 0);
tileColors[160][1] = rgb(0, 200, 0);
tileColors[160][2] = rgb(0, 0, 200);
tileColors[161][0] = rgb(144, 195, 232);
tileColors[162][0] = rgb(184, 219, 240);
tileColors[163][0] = rgb(174, 145, 214);
tileColors[164][0] = rgb(218, 182, 204);
tileColors[170][0] = rgb(27, 109, 69);
tileColors[171][0] = rgb(33, 135, 85);
color = rgb(129, 125, 93);
tileColors[166][0] = color;
tileColors[175][0] = color;
tileColors[167][0] = rgb(62, 82, 114);
color = rgb(132, 157, 127);
tileColors[168][0] = color;
tileColors[176][0] = color;
color = rgb(152, 171, 198);
tileColors[169][0] = color;
tileColors[177][0] = color;
tileColors[179][0] = rgb(49, 134, 114);
tileColors[180][0] = rgb(126, 134, 49);
tileColors[181][0] = rgb(134, 59, 49);
tileColors[182][0] = rgb(43, 86, 140);
tileColors[183][0] = rgb(121, 49, 134);
tileColors[381][0] = rgb(254, 121, 2);
tileColors[189][0] = rgb(223, 255, 255);
tileColors[193][0] = rgb(56, 121, 255);
tileColors[194][0] = rgb(157, 157, 107);
tileColors[195][0] = rgb(134, 22, 34);
tileColors[196][0] = rgb(147, 144, 178);
tileColors[197][0] = rgb(97, 200, 225);
tileColors[198][0] = rgb(62, 61, 52);
tileColors[199][0] = rgb(208, 80, 80);
tileColors[201][0] = rgb(203, 61, 64);
tileColors[205][0] = rgb(186, 50, 52);
tileColors[200][0] = rgb(216, 152, 144);
tileColors[202][0] = rgb(213, 178, 28);
tileColors[203][0] = rgb(128, 44, 45);
tileColors[204][0] = rgb(125, 55, 65);
tileColors[206][0] = rgb(124, 175, 201);
tileColors[208][0] = rgb(88, 105, 118);
tileColors[211][0] = rgb(191, 233, 115);
tileColors[213][0] = rgb(137, 120, 67);
tileColors[214][0] = rgb(103, 103, 103);
tileColors[221][0] = rgb(239, 90, 50);
tileColors[222][0] = rgb(231, 96, 228);
tileColors[223][0] = rgb(57, 85, 101);
tileColors[224][0] = rgb(107, 132, 139);
tileColors[225][0] = rgb(227, 125, 22);
tileColors[226][0] = rgb(141, 56, 0);
tileColors[229][0] = rgb(255, 156, 12);
tileColors[230][0] = rgb(131, 79, 13);
tileColors[234][0] = rgb(53, 44, 41);
tileColors[235][0] = rgb(214, 184, 46);
tileColors[236][0] = rgb(149, 232, 87);
tileColors[237][0] = rgb(255, 241, 51);
tileColors[238][0] = rgb(225, 128, 206);
tileColors[243][0] = rgb(198, 196, 170);
tileColors[248][0] = rgb(219, 71, 38);
tileColors[249][0] = rgb(235, 38, 231);
tileColors[250][0] = rgb(86, 85, 92);
tileColors[251][0] = rgb(235, 150, 23);
tileColors[252][0] = rgb(153, 131, 44);
tileColors[253][0] = rgb(57, 48, 97);
tileColors[254][0] = rgb(248, 158, 92);
tileColors[255][0] = rgb(107, 49, 154);
tileColors[256][0] = rgb(154, 148, 49);
tileColors[257][0] = rgb(49, 49, 154);
tileColors[258][0] = rgb(49, 154, 68);
tileColors[259][0] = rgb(154, 49, 77);
tileColors[260][0] = rgb(85, 89, 118);
tileColors[261][0] = rgb(154, 83, 49);
tileColors[262][0] = rgb(221, 79, 255);
tileColors[263][0] = rgb(250, 255, 79);
tileColors[264][0] = rgb(79, 102, 255);
tileColors[265][0] = rgb(79, 255, 89);
tileColors[266][0] = rgb(255, 79, 79);
tileColors[267][0] = rgb(240, 240, 247);
tileColors[268][0] = rgb(255, 145, 79);
tileColors[287][0] = rgb(79, 128, 17);
color = rgb(122, 217, 232);
tileColors[275][0] = color;
tileColors[276][0] = color;
tileColors[277][0] = color;
tileColors[278][0] = color;
tileColors[279][0] = color;
tileColors[280][0] = color;
tileColors[281][0] = color;
tileColors[282][0] = color;
tileColors[285][0] = color;
tileColors[286][0] = color;
tileColors[288][0] = color;
tileColors[289][0] = color;
tileColors[290][0] = color;
tileColors[291][0] = color;
tileColors[292][0] = color;
tileColors[293][0] = color;
tileColors[294][0] = color;
tileColors[295][0] = color;
tileColors[296][0] = color;
tileColors[297][0] = color;
tileColors[298][0] = color;
tileColors[299][0] = color;
tileColors[309][0] = color;
tileColors[310][0] = color;
tileColors[413][0] = color;
tileColors[339][0] = color;
tileColors[358][0] = color;
tileColors[359][0] = color;
tileColors[360][0] = color;
tileColors[361][0] = color;
tileColors[362][0] = color;
tileColors[363][0] = color;
tileColors[364][0] = color;
tileColors[391][0] = color;
tileColors[392][0] = color;
tileColors[393][0] = color;
tileColors[394][0] = color;
tileColors[414][0] = color;
tileColors[408][0] = rgb(85, 83, 82);
tileColors[409][0] = rgb(85, 83, 82);
tileColors[415][0] = rgb(249, 75, 7);
tileColors[416][0] = rgb(0, 160, 170);
tileColors[417][0] = rgb(160, 87, 234);
tileColors[418][0] = rgb(22, 173, 254);
tileColors[311][0] = rgb(117, 61, 25);
tileColors[312][0] = rgb(204, 93, 73);
tileColors[313][0] = rgb(87, 150, 154);
tileColors[4][0] = rgb(253, 221, 3);
tileColors[4][1] = rgb(253, 221, 3);
color = rgb(253, 221, 3);
tileColors[93][0] = color;
tileColors[33][0] = color;
tileColors[174][0] = color;
tileColors[100][0] = color;
tileColors[98][0] = color;
tileColors[173][0] = color;
color = rgb(119, 105, 79);
tileColors[11][0] = color;
tileColors[10][0] = color;
color = rgb(191, 142, 111);
tileColors[14][0] = color;
tileColors[15][0] = color;
tileColors[18][0] = color;
tileColors[19][0] = color;
tileColors[55][0] = color;
tileColors[79][0] = color;
tileColors[86][0] = color;
tileColors[87][0] = color;
tileColors[88][0] = color;
tileColors[89][0] = color;
tileColors[94][0] = color;
tileColors[101][0] = color;
tileColors[104][0] = color;
tileColors[106][0] = color;
tileColors[114][0] = color;
tileColors[128][0] = color;
tileColors[139][0] = color;
tileColors[172][0] = color;
tileColors[216][0] = color;
tileColors[269][0] = color;
tileColors[334][0] = color;
tileColors[377][0] = color;
tileColors[380][0] = color;
tileColors[395][0] = color;
tileColors[12][0] = rgb(174, 24, 69);
tileColors[13][0] = rgb(133, 213, 247);
color = rgb(144, 148, 144);
tileColors[17][0] = color;
tileColors[90][0] = color;
tileColors[96][0] = color;
tileColors[97][0] = color;
tileColors[99][0] = color;
tileColors[132][0] = color;
tileColors[142][0] = color;
tileColors[143][0] = color;
tileColors[144][0] = color;
tileColors[207][0] = color;
tileColors[209][0] = color;
tileColors[212][0] = color;
tileColors[217][0] = color;
tileColors[218][0] = color;
tileColors[219][0] = color;
tileColors[220][0] = color;
tileColors[228][0] = color;
tileColors[300][0] = color;
tileColors[301][0] = color;
tileColors[302][0] = color;
tileColors[303][0] = color;
tileColors[304][0] = color;
tileColors[305][0] = color;
tileColors[306][0] = color;
tileColors[307][0] = color;
tileColors[308][0] = color;
tileColors[349][0] = rgb(144, 148, 144);
tileColors[105][0] = rgb(144, 148, 144);
tileColors[105][1] = rgb(177, 92, 31);
tileColors[105][2] = rgb(201, 188, 170);
tileColors[137][0] = rgb(144, 148, 144);
tileColors[137][1] = rgb(141, 56, 0);
tileColors[16][0] = rgb(140, 130, 116);
tileColors[26][0] = rgb(119, 101, 125);
tileColors[26][1] = rgb(214, 127, 133);
tileColors[36][0] = rgb(230, 89, 92);
tileColors[28][0] = rgb(151, 79, 80);
tileColors[28][1] = rgb(90, 139, 140);
tileColors[28][2] = rgb(192, 136, 70);
tileColors[28][3] = rgb(203, 185, 151);
tileColors[28][4] = rgb(73, 56, 41);
tileColors[28][5] = rgb(148, 159, 67);
tileColors[28][6] = rgb(138, 172, 67);
tileColors[28][7] = rgb(226, 122, 47);
tileColors[28][8] = rgb(198, 87, 93);
tileColors[29][0] = rgb(175, 105, 128);
tileColors[51][0] = rgb(192, 202, 203);
tileColors[31][0] = rgb(141, 120, 168);
tileColors[31][1] = rgb(212, 105, 105);
tileColors[32][0] = rgb(151, 135, 183);
tileColors[42][0] = rgb(251, 235, 127);
tileColors[50][0] = rgb(170, 48, 114);
tileColors[85][0] = rgb(192, 192, 192);
tileColors[69][0] = rgb(190, 150, 92);
tileColors[77][0] = rgb(238, 85, 70);
tileColors[81][0] = rgb(245, 133, 191);
tileColors[78][0] = rgb(121, 110, 97);
tileColors[141][0] = rgb(192, 59, 59);
tileColors[129][0] = rgb(255, 117, 224);
tileColors[126][0] = rgb(159, 209, 229);
tileColors[125][0] = rgb(141, 175, 255);
tileColors[103][0] = rgb(141, 98, 77);
tileColors[95][0] = rgb(255, 162, 31);
tileColors[92][0] = rgb(213, 229, 237);
tileColors[91][0] = rgb(13, 88, 130);
tileColors[215][0] = rgb(254, 121, 2);
tileColors[316][0] = rgb(157, 176, 226);
tileColors[317][0] = rgb(118, 227, 129);
tileColors[318][0] = rgb(227, 118, 215);
tileColors[319][0] = rgb(96, 68, 48);
tileColors[320][0] = rgb(203, 185, 151);
tileColors[321][0] = rgb(96, 77, 64);
tileColors[322][0] = rgb(198, 170, 104);
tileColors[149][0] = rgb(220, 50, 50);
tileColors[149][1] = rgb(0, 220, 50);
tileColors[149][2] = rgb(50, 50, 220);
tileColors[133][0] = rgb(231, 53, 56);
tileColors[133][1] = rgb(192, 189, 221);
tileColors[134][0] = rgb(166, 187, 153);
tileColors[134][1] = rgb(241, 129, 249);
tileColors[102][0] = rgb(229, 212, 73);
tileColors[49][0] = rgb(89, 201, 255);
tileColors[35][0] = rgb(226, 145, 30);
tileColors[34][0] = rgb(235, 166, 135);
tileColors[136][0] = rgb(213, 203, 204);
tileColors[231][0] = rgb(224, 194, 101);
tileColors[239][0] = rgb(224, 194, 101);
tileColors[240][0] = rgb(120, 85, 60);
tileColors[240][1] = rgb(99, 50, 30);
tileColors[240][2] = rgb(153, 153, 117);
tileColors[240][3] = rgb(112, 84, 56);
tileColors[240][4] = rgb(234, 231, 226);
tileColors[241][0] = rgb(77, 74, 72);
tileColors[244][0] = rgb(200, 245, 253);
color = rgb(99, 50, 30);
tileColors[242][0] = color;
tileColors[245][0] = color;
tileColors[246][0] = color;
tileColors[242][1] = rgb(185, 142, 97);
tileColors[247][0] = rgb(140, 150, 150);
tileColors[271][0] = rgb(107, 250, 255);
tileColors[270][0] = rgb(187, 255, 107);
tileColors[314][0] = rgb(181, 164, 125);
tileColors[324][0] = rgb(228, 213, 173);
tileColors[351][0] = rgb(31, 31, 31);
tileColors[424][0] = rgb(146, 155, 187);
tileColors[429][0] = rgb(220, 220, 220);
tileColors[445][0] = rgb(240, 240, 240);
tileColors[21][0] = rgb(174, 129, 92);
tileColors[21][1] = rgb(233, 207, 94);
tileColors[21][2] = rgb(137, 128, 200);
tileColors[21][3] = rgb(160, 160, 160);
tileColors[21][4] = rgb(106, 210, 255);
tileColors[441][0] = rgb(174, 129, 92);
tileColors[441][1] = rgb(233, 207, 94);
tileColors[441][2] = rgb(137, 128, 200);
tileColors[441][3] = rgb(160, 160, 160);
tileColors[441][4] = rgb(106, 210, 255);
tileColors[27][0] = rgb(54, 154, 54);
tileColors[27][1] = rgb(226, 196, 49);
color = rgb(246, 197, 26);
tileColors[82][0] = color;
tileColors[83][0] = color;
tileColors[84][0] = color;
color = rgb(76, 150, 216);
tileColors[82][1] = color;
tileColors[83][1] = color;
tileColors[84][1] = color;
color = rgb(185, 214, 42);
tileColors[82][2] = color;
tileColors[83][2] = color;
tileColors[84][2] = color;
color = rgb(167, 203, 37);
tileColors[82][3] = color;
tileColors[83][3] = color;
tileColors[84][3] = color;
color = rgb(72, 145, 125);
tileColors[82][4] = color;
tileColors[83][4] = color;
tileColors[84][4] = color;
color = rgb(177, 69, 49);
tileColors[82][5] = color;
tileColors[83][5] = color;
tileColors[84][5] = color;
color = rgb(40, 152, 240);
tileColors[82][6] = color;
tileColors[83][6] = color;
tileColors[84][6] = color;
tileColors[165][0] = rgb(115, 173, 229);
tileColors[165][1] = rgb(100, 100, 100);
tileColors[165][2] = rgb(152, 152, 152);
tileColors[165][3] = rgb(227, 125, 22);
tileColors[178][0] = rgb(208, 94, 201);
tileColors[178][1] = rgb(233, 146, 69);
tileColors[178][2] = rgb(71, 146, 251);
tileColors[178][3] = rgb(60, 226, 133);
tileColors[178][4] = rgb(250, 30, 71);
tileColors[178][5] = rgb(166, 176, 204);
tileColors[178][6] = rgb(255, 217, 120);
tileColors[184][0] = rgb(29, 106, 88);
tileColors[184][1] = rgb(94, 100, 36);
tileColors[184][2] = rgb(96, 44, 40);
tileColors[184][3] = rgb(34, 63, 102);
tileColors[184][4] = rgb(79, 35, 95);
tileColors[184][5] = rgb(253, 62, 3);
color = rgb(99, 99, 99);
tileColors[185][0] = color;
tileColors[186][0] = color;
tileColors[187][0] = color;
color = rgb(114, 81, 56);
tileColors[185][1] = color;
tileColors[186][1] = color;
tileColors[187][1] = color;
color = rgb(133, 133, 101);
tileColors[185][2] = color;
tileColors[186][2] = color;
tileColors[187][2] = color;
color = rgb(151, 200, 211);
tileColors[185][3] = color;
tileColors[186][3] = color;
tileColors[187][3] = color;
color = rgb(177, 183, 161);
tileColors[185][4] = color;
tileColors[186][4] = color;
tileColors[187][4] = color;
color = rgb(134, 114, 38);
tileColors[185][5] = color;
tileColors[186][5] = color;
tileColors[187][5] = color;
color = rgb(82, 62, 66);
tileColors[185][6] = color;
tileColors[186][6] = color;
tileColors[187][6] = color;
color = rgb(143, 117, 121);
tileColors[185][7] = color;
tileColors[186][7] = color;
tileColors[187][7] = color;
color = rgb(177, 92, 31);
tileColors[185][8] = color;
tileColors[186][8] = color;
tileColors[187][8] = color;
color = rgb(85, 73, 87);
tileColors[185][9] = color;
tileColors[186][9] = color;
tileColors[187][9] = color;
tileColors[227][0] = rgb(74, 197, 155);
tileColors[227][1] = rgb(54, 153, 88);
tileColors[227][2] = rgb(63, 126, 207);
tileColors[227][3] = rgb(240, 180, 4);
tileColors[227][4] = rgb(45, 68, 168);
tileColors[227][5] = rgb(61, 92, 0);
tileColors[227][6] = rgb(216, 112, 152);
tileColors[227][7] = rgb(200, 40, 24);
tileColors[227][8] = rgb(113, 45, 133);
tileColors[227][9] = rgb(235, 137, 2);
tileColors[227][10] = rgb(41, 152, 135);
tileColors[227][11] = rgb(198, 19, 78);
tileColors[373][0] = rgb(9, 61, 191);
tileColors[374][0] = rgb(253, 32, 3);
tileColors[375][0] = rgb(255, 156, 12);
tileColors[461][0] = rgb(255, 222, 100);
tileColors[323][0] = rgb(182, 141, 86);
tileColors[325][0] = rgb(129, 125, 93);
tileColors[326][0] = rgb(9, 61, 191);
tileColors[327][0] = rgb(253, 32, 3);
tileColors[330][0] = rgb(226, 118, 76);
tileColors[331][0] = rgb(161, 172, 173);
tileColors[332][0] = rgb(204, 181, 72);
tileColors[333][0] = rgb(190, 190, 178);
tileColors[335][0] = rgb(217, 174, 137);
tileColors[336][0] = rgb(253, 62, 3);
tileColors[337][0] = rgb(144, 148, 144);
tileColors[338][0] = rgb(85, 255, 160);
tileColors[315][0] = rgb(235, 114, 80);
tileColors[340][0] = rgb(96, 248, 2);
tileColors[341][0] = rgb(105, 74, 202);
tileColors[342][0] = rgb(29, 240, 255);
tileColors[343][0] = rgb(254, 202, 80);
tileColors[344][0] = rgb(131, 252, 245);
tileColors[345][0] = rgb(255, 156, 12);
tileColors[346][0] = rgb(149, 212, 89);
tileColors[347][0] = rgb(236, 74, 79);
tileColors[348][0] = rgb(44, 26, 233);
tileColors[350][0] = rgb(55, 97, 155);
tileColors[352][0] = rgb(238, 97, 94);
tileColors[354][0] = rgb(141, 107, 89);
tileColors[355][0] = rgb(141, 107, 89);
tileColors[356][0] = rgb(233, 203, 24);
tileColors[357][0] = rgb(168, 178, 204);
tileColors[367][0] = rgb(168, 178, 204);
tileColors[365][0] = rgb(146, 136, 205);
tileColors[366][0] = rgb(223, 232, 233);
tileColors[368][0] = rgb(50, 46, 104);
tileColors[369][0] = rgb(50, 46, 104);
tileColors[370][0] = rgb(127, 116, 194);
tileColors[372][0] = rgb(252, 128, 201);
tileColors[371][0] = rgb(249, 101, 189);
tileColors[376][0] = rgb(160, 120, 92);
tileColors[378][0] = rgb(160, 120, 100);
tileColors[379][0] = rgb(251, 209, 240);
tileColors[382][0] = rgb(28, 216, 94);
tileColors[383][0] = rgb(221, 136, 144);
tileColors[384][0] = rgb(131, 206, 12);
tileColors[385][0] = rgb(87, 21, 144);
tileColors[386][0] = rgb(127, 92, 69);
tileColors[387][0] = rgb(127, 92, 69);
tileColors[388][0] = rgb(127, 92, 69);
tileColors[389][0] = rgb(127, 92, 69);
tileColors[390][0] = rgb(253, 32, 3);
tileColors[397][0] = rgb(212, 192, 100);
tileColors[396][0] = rgb(198, 124, 78);
tileColors[398][0] = rgb(100, 82, 126);
tileColors[399][0] = rgb(77, 76, 66);
tileColors[400][0] = rgb(96, 68, 117);
tileColors[401][0] = rgb(68, 60, 51);
tileColors[402][0] = rgb(174, 168, 186);
tileColors[403][0] = rgb(205, 152, 186);
tileColors[404][0] = rgb(140, 84, 60);
tileColors[405][0] = rgb(140, 140, 140);
tileColors[406][0] = rgb(120, 120, 120);
tileColors[407][0] = rgb(255, 227, 132);
tileColors[411][0] = rgb(227, 46, 46);
tileColors[421][0] = rgb(65, 75, 90);
tileColors[422][0] = rgb(65, 75, 90);
tileColors[425][0] = rgb(146, 155, 187);
tileColors[426][0] = rgb(168, 38, 47);
tileColors[430][0] = rgb(39, 168, 96);
tileColors[431][0] = rgb(39, 94, 168);
tileColors[432][0] = rgb(242, 221, 100);
tileColors[433][0] = rgb(224, 100, 242);
tileColors[434][0] = rgb(197, 193, 216);
tileColors[427][0] = rgb(183, 53, 62);
tileColors[435][0] = rgb(54, 183, 111);
tileColors[436][0] = rgb(54, 109, 183);
tileColors[437][0] = rgb(255, 236, 115);
tileColors[438][0] = rgb(239, 115, 255);
tileColors[439][0] = rgb(212, 208, 231);
tileColors[440][0] = rgb(238, 51, 53);
tileColors[440][1] = rgb(13, 107, 216);
tileColors[440][2] = rgb(33, 184, 115);
tileColors[440][3] = rgb(255, 221, 62);
tileColors[440][4] = rgb(165, 0, 236);
tileColors[440][5] = rgb(223, 230, 238);
tileColors[440][6] = rgb(207, 101, 0);
tileColors[419][0] = rgb(88, 95, 114);
tileColors[419][1] = rgb(214, 225, 236);
tileColors[419][2] = rgb(25, 131, 205);
tileColors[423][0] = rgb(245, 197, 1);
tileColors[423][1] = rgb(185, 0, 224);
tileColors[423][2] = rgb(58, 240, 111);
tileColors[423][3] = rgb(50, 107, 197);
tileColors[423][4] = rgb(253, 91, 3);
tileColors[423][5] = rgb(254, 194, 20);
tileColors[423][6] = rgb(174, 195, 215);
tileColors[420][0] = rgb(99, 255, 107);
tileColors[420][1] = rgb(99, 255, 107);
tileColors[420][4] = rgb(99, 255, 107);
tileColors[420][2] = rgb(218, 2, 5);
tileColors[420][3] = rgb(218, 2, 5);
tileColors[420][5] = rgb(218, 2, 5);
tileColors[410][0] = rgb(75, 139, 166);
tileColors[412][0] = rgb(75, 139, 166);
tileColors[443][0] = rgb(144, 148, 144);
tileColors[442][0] = rgb(3, 144, 201);
tileColors[444][0] = rgb(191, 176, 124);
tileColors[446][0] = rgb(255, 66, 152);
tileColors[447][0] = rgb(179, 132, 255);
tileColors[448][0] = rgb(0, 206, 180);
tileColors[449][0] = rgb(91, 186, 240);
tileColors[450][0] = rgb(92, 240, 91);
tileColors[451][0] = rgb(240, 91, 147);
tileColors[452][0] = rgb(255, 150, 181);
tileColors[453][0] = rgb(179, 132, 255);
tileColors[453][1] = rgb(0, 206, 180);
tileColors[453][2] = rgb(255, 66, 152);
tileColors[454][0] = rgb(174, 16, 176);
tileColors[455][0] = rgb(48, 225, 110);
tileColors[456][0] = rgb(179, 132, 255);
tileColors[457][0] = rgb(150, 164, 206);
tileColors[457][1] = rgb(255, 132, 184);
tileColors[457][2] = rgb(74, 255, 232);
tileColors[457][3] = rgb(215, 159, 255);
tileColors[457][4] = rgb(229, 219, 234);
tileColors[458][0] = rgb(211, 198, 111);
tileColors[459][0] = rgb(190, 223, 232);
tileColors[460][0] = rgb(141, 163, 181);
tileColors[462][0] = rgb(231, 178, 28);

liquidColors[0] = rgb(9, 61, 191);
liquidColors[1] = rgb(253, 32, 3);
liquidColors[2] = rgb(254, 194, 20);

for (var j = 0; j < wallColors.length; j++) {
  wallColors[j] = new Array(2);
}

wallColors[158][0] = rgb(107, 49, 154);
wallColors[163][0] = rgb(154, 148, 49);
wallColors[162][0] = rgb(49, 49, 154);
wallColors[160][0] = rgb(49, 154, 68);
wallColors[161][0] = rgb(154, 49, 77);
wallColors[159][0] = rgb(85, 89, 118);
wallColors[157][0] = rgb(154, 83, 49);
wallColors[154][0] = rgb(221, 79, 255);
wallColors[166][0] = rgb(250, 255, 79);
wallColors[165][0] = rgb(79, 102, 255);
wallColors[156][0] = rgb(79, 255, 89);
wallColors[164][0] = rgb(255, 79, 79);
wallColors[155][0] = rgb(240, 240, 247);
wallColors[153][0] = rgb(255, 145, 79);
wallColors[169][0] = rgb(5, 5, 5);
wallColors[224][0] = rgb(57, 55, 52);
wallColors[225][0] = rgb(68, 68, 68);
wallColors[226][0] = rgb(148, 138, 74);
wallColors[227][0] = rgb(95, 137, 191);
wallColors[170][0] = rgb(59, 39, 22);
wallColors[171][0] = rgb(59, 39, 22);
color = rgb(52, 52, 52);
wallColors[1][0] = color;
wallColors[53][0] = color;
wallColors[52][0] = color;
wallColors[51][0] = color;
wallColors[50][0] = color;
wallColors[49][0] = color;
wallColors[48][0] = color;
wallColors[44][0] = color;
wallColors[5][0] = color;
color = rgb(88, 61, 46);
wallColors[2][0] = color;
wallColors[16][0] = color;
wallColors[59][0] = color;
wallColors[3][0] = rgb(61, 58, 78);
wallColors[4][0] = rgb(73, 51, 36);
wallColors[6][0] = rgb(91, 30, 30);
color = rgb(27, 31, 42);
wallColors[7][0] = color;
wallColors[17][0] = color;
color = rgb(32, 40, 45);
wallColors[94][0] = color;
wallColors[100][0] = color;
color = rgb(44, 41, 50);
wallColors[95][0] = color;
wallColors[101][0] = color;
color = rgb(31, 39, 26);
wallColors[8][0] = color;
wallColors[18][0] = color;
color = rgb(36, 45, 44);
wallColors[98][0] = color;
wallColors[104][0] = color;
color = rgb(38, 49, 50);
wallColors[99][0] = color;
wallColors[105][0] = color;
color = rgb(41, 28, 36);
wallColors[9][0] = color;
wallColors[19][0] = color;
color = rgb(72, 50, 77);
wallColors[96][0] = color;
wallColors[102][0] = color;
color = rgb(78, 50, 69);
wallColors[97][0] = color;
wallColors[103][0] = color;
wallColors[10][0] = rgb(74, 62, 12);
wallColors[11][0] = rgb(46, 56, 59);
wallColors[12][0] = rgb(75, 32, 11);
wallColors[13][0] = rgb(67, 37, 37);
color = rgb(15, 15, 15);
wallColors[14][0] = color;
wallColors[20][0] = color;
wallColors[15][0] = rgb(52, 43, 45);
wallColors[22][0] = rgb(113, 99, 99);
wallColors[23][0] = rgb(38, 38, 43);
wallColors[24][0] = rgb(53, 39, 41);
wallColors[25][0] = rgb(11, 35, 62);
wallColors[26][0] = rgb(21, 63, 70);
wallColors[27][0] = rgb(88, 61, 46);
wallColors[27][1] = rgb(52, 52, 52);
wallColors[28][0] = rgb(81, 84, 101);
wallColors[29][0] = rgb(88, 23, 23);
wallColors[30][0] = rgb(28, 88, 23);
wallColors[31][0] = rgb(78, 87, 99);
color = rgb(69, 67, 41);
wallColors[34][0] = color;
wallColors[37][0] = color;
wallColors[32][0] = rgb(86, 17, 40);
wallColors[33][0] = rgb(49, 47, 83);
wallColors[35][0] = rgb(51, 51, 70);
wallColors[36][0] = rgb(87, 59, 55);
wallColors[38][0] = rgb(49, 57, 49);
wallColors[39][0] = rgb(78, 79, 73);
wallColors[45][0] = rgb(60, 59, 51);
wallColors[46][0] = rgb(48, 57, 47);
wallColors[47][0] = rgb(71, 77, 85);
wallColors[40][0] = rgb(85, 102, 103);
wallColors[41][0] = rgb(52, 50, 62);
wallColors[42][0] = rgb(71, 42, 44);
wallColors[43][0] = rgb(73, 66, 50);
wallColors[54][0] = rgb(40, 56, 50);
wallColors[55][0] = rgb(49, 48, 36);
wallColors[56][0] = rgb(43, 33, 32);
wallColors[57][0] = rgb(31, 40, 49);
wallColors[58][0] = rgb(48, 35, 52);
wallColors[60][0] = rgb(1, 52, 20);
wallColors[61][0] = rgb(55, 39, 26);
wallColors[62][0] = rgb(39, 33, 26);
wallColors[69][0] = rgb(43, 42, 68);
wallColors[70][0] = rgb(30, 70, 80);
color = rgb(30, 80, 48);
wallColors[63][0] = color;
wallColors[65][0] = color;
wallColors[66][0] = color;
wallColors[68][0] = color;
color = rgb(53, 80, 30);
wallColors[64][0] = color;
wallColors[67][0] = color;
wallColors[78][0] = rgb(63, 39, 26);
wallColors[71][0] = rgb(78, 105, 135);
wallColors[72][0] = rgb(52, 84, 12);
wallColors[73][0] = rgb(190, 204, 223);
color = rgb(64, 62, 80);
wallColors[74][0] = color;
wallColors[80][0] = color;
wallColors[75][0] = rgb(65, 65, 35);
wallColors[76][0] = rgb(20, 46, 104);
wallColors[77][0] = rgb(61, 13, 16);
wallColors[79][0] = rgb(51, 47, 96);
wallColors[81][0] = rgb(101, 51, 51);
wallColors[82][0] = rgb(77, 64, 34);
wallColors[83][0] = rgb(62, 38, 41);
wallColors[84][0] = rgb(48, 78, 93);
wallColors[85][0] = rgb(54, 63, 69);
color = rgb(138, 73, 38);
wallColors[86][0] = color;
wallColors[108][0] = color;
color = rgb(50, 15, 8);
wallColors[87][0] = color;
wallColors[112][0] = color;
wallColors[109][0] = rgb(94, 25, 17);
wallColors[110][0] = rgb(125, 36, 122);
wallColors[111][0] = rgb(51, 35, 27);
wallColors[113][0] = rgb(135, 58, 0);
wallColors[114][0] = rgb(65, 52, 15);
wallColors[115][0] = rgb(39, 42, 51);
wallColors[116][0] = rgb(89, 26, 27);
wallColors[117][0] = rgb(126, 123, 115);
wallColors[118][0] = rgb(8, 50, 19);
wallColors[119][0] = rgb(95, 21, 24);
wallColors[120][0] = rgb(17, 31, 65);
wallColors[121][0] = rgb(192, 173, 143);
wallColors[122][0] = rgb(114, 114, 131);
wallColors[123][0] = rgb(136, 119, 7);
wallColors[124][0] = rgb(8, 72, 3);
wallColors[125][0] = rgb(117, 132, 82);
wallColors[126][0] = rgb(100, 102, 114);
wallColors[127][0] = rgb(30, 118, 226);
wallColors[128][0] = rgb(93, 6, 102);
wallColors[129][0] = rgb(64, 40, 169);
wallColors[130][0] = rgb(39, 34, 180);
wallColors[131][0] = rgb(87, 94, 125);
wallColors[132][0] = rgb(6, 6, 6);
wallColors[133][0] = rgb(69, 72, 186);
wallColors[134][0] = rgb(130, 62, 16);
wallColors[135][0] = rgb(22, 123, 163);
wallColors[136][0] = rgb(40, 86, 151);
wallColors[137][0] = rgb(183, 75, 15);
wallColors[138][0] = rgb(83, 80, 100);
wallColors[139][0] = rgb(115, 65, 68);
wallColors[140][0] = rgb(119, 108, 81);
wallColors[141][0] = rgb(59, 67, 71);
wallColors[142][0] = rgb(17, 172, 143);
wallColors[143][0] = rgb(90, 112, 105);
wallColors[144][0] = rgb(62, 28, 87);
wallColors[146][0] = rgb(120, 59, 19);
wallColors[147][0] = rgb(59, 59, 59);
wallColors[148][0] = rgb(229, 218, 161);
wallColors[149][0] = rgb(73, 59, 50);
wallColors[151][0] = rgb(102, 75, 34);
wallColors[167][0] = rgb(70, 68, 51);
wallColors[172][0] = rgb(163, 96, 0);
wallColors[173][0] = rgb(94, 163, 46);
wallColors[174][0] = rgb(117, 32, 59);
wallColors[175][0] = rgb(20, 11, 203);
wallColors[176][0] = rgb(74, 69, 88);
wallColors[177][0] = rgb(60, 30, 30);
wallColors[183][0] = rgb(111, 117, 135);
wallColors[179][0] = rgb(111, 117, 135);
wallColors[178][0] = rgb(111, 117, 135);
wallColors[184][0] = rgb(25, 23, 54);
wallColors[181][0] = rgb(25, 23, 54);
wallColors[180][0] = rgb(25, 23, 54);
wallColors[182][0] = rgb(74, 71, 129);
wallColors[185][0] = rgb(52, 52, 52);
wallColors[186][0] = rgb(38, 9, 66);
wallColors[216][0] = rgb(158, 100, 64);
wallColors[217][0] = rgb(62, 45, 75);
wallColors[218][0] = rgb(57, 14, 12);
wallColors[219][0] = rgb(96, 72, 133);
wallColors[187][0] = rgb(149, 80, 51);
wallColors[220][0] = rgb(67, 55, 80);
wallColors[221][0] = rgb(64, 37, 29);
wallColors[222][0] = rgb(70, 51, 91);
wallColors[188][0] = rgb(82, 63, 80);
wallColors[189][0] = rgb(65, 61, 77);
wallColors[190][0] = rgb(64, 65, 92);
wallColors[191][0] = rgb(76, 53, 84);
wallColors[192][0] = rgb(144, 67, 52);
wallColors[193][0] = rgb(149, 48, 48);
wallColors[194][0] = rgb(111, 32, 36);
wallColors[195][0] = rgb(147, 48, 55);
wallColors[196][0] = rgb(97, 67, 51);
wallColors[197][0] = rgb(112, 80, 62);
wallColors[198][0] = rgb(88, 61, 46);
wallColors[199][0] = rgb(127, 94, 76);
wallColors[200][0] = rgb(143, 50, 123);
wallColors[201][0] = rgb(136, 120, 131);
wallColors[202][0] = rgb(219, 92, 143);
wallColors[203][0] = rgb(113, 64, 150);
wallColors[204][0] = rgb(74, 67, 60);
wallColors[205][0] = rgb(60, 78, 59);
wallColors[206][0] = rgb(0, 54, 21);
wallColors[207][0] = rgb(74, 97, 72);
wallColors[208][0] = rgb(40, 37, 35);
wallColors[209][0] = rgb(77, 63, 66);
wallColors[210][0] = rgb(111, 6, 6);
wallColors[211][0] = rgb(88, 67, 59);
wallColors[212][0] = rgb(88, 87, 80);
wallColors[213][0] = rgb(71, 71, 67);
wallColors[214][0] = rgb(76, 52, 60);
wallColors[215][0] = rgb(89, 48, 59);
wallColors[223][0] = rgb(51, 18, 4);
wallColors[228][0] = rgb(160, 2, 75);
wallColors[229][0] = rgb(100, 55, 164);
wallColors[230][0] = rgb(0, 117, 101);
var array4 = new Array(256);
var color2 = rgb(50, 40, 255);
var color3 = rgb(145, 185, 255);
for (var k = 0; k < array4.length; k++) {
  var num = k / array4.length;
  var num2 = 1 - num;
  array4[k] = rgb(50 * num2 + 145 * num, 40 * num2 + 185 * num, 255 * num2 + 255 * num);
}

var array5 = new Array(256);
var color4 = rgb(88, 61, 46);
var color5 = rgb(37, 78, 123);
for (var l = 0; l < array5.length; l++) {
  var num3 = l / 255;
  var num4 = 1 - num3;
  array5[l] = rgb(88 * num4 + 37 * num3, 61 * num4 + 78 * num3, 46 * num4 + 123 * num3);
}
var array6 = new Array(256);
var color6 = rgb(74, 67, 60);
color5 = rgb(53, 70, 97);
for (var m = 0; m < array6.length; m++) {
  var num5 = m / 255;
  var num6 = 1 - num5;
  array6[m] = rgb(74 * num6 + 53 * num5, 67 * num6 + 70 * num5, 60 * num6 + 97 * num5);
}
var color7 = rgb(50, 44, 38);
var num7 = 0;
var tileOptionCounts = new Array(tileColors.length);
for (var n = 0; n < tileColors.length; n++) {
  var array7 = tileColors[n];
  var num8 = 0;
  while (num8 < 12 && (array7[num8] != rgb(0, 0, 0))) {
    num8++;
  }
  tileOptionCounts[n] = num8;
  num7 += num8;
}
wallOptionCounts = new Array(wallColors.length);
for (var num9 = 0; num9 < wallColors.length; num9++) {
  var array8 = wallColors[num9];
  var num10 = 0;
  while (num10 < 2 && (array8[num10] != rgb(0, 0, 0))) {
    num10++;
  }
  wallOptionCounts[num9] = num10;
  num7 += num10;
}
num7 += 773;
var colorLookup = new Array(num7);
colorLookup[0] = rgb(0, 0, 0);
var num11 = 1;
var tilePosition = num11;
tileLookup = new Array(tileColors.length);
for (var num12 = 0; num12 < tileColors.length; num12++) {
  if (tileOptionCounts[num12] > 0) {
    var arg_5446_0 = tileColors[num12];
    tileLookup[num12] = num11;
    for (var num13 = 0; num13 < tileOptionCounts[num12]; num13++) {
      colorLookup[num11] = tileColors[num12][num13];
      num11 += 1;
    }
  } else {
    tileLookup[num12] = 0;
  }
}
wallPosition = num11;
wallLookup = new Array(wallColors.length);
wallRangeStart = num11;
for (var num14 = 0; num14 < wallColors.length; num14++) {
  if (wallOptionCounts[num14] > 0) {
    var arg_54DB_0 = wallColors[num14];
    wallLookup[num14] = num11;
    for (var num15 = 0; num15 < wallOptionCounts[num14]; num15++) {
      colorLookup[num11] = wallColors[num14][num15];
      num11 += 1;
    }
  } else {
    wallLookup[num14] = 0;
  }
}
wallRangeEnd = num11;
liquidPosition = num11;
for (var num16 = 0; num16 < 3; num16++) {
  colorLookup[num11] = liquidColors[num16];
  num11 += 1;
}
skyPosition = num11;
for (var num17 = 0; num17 < 256; num17++) {
  colorLookup[num11] = array4[num17];
  num11 += 1;
}
dirtPosition = num11;
for (var num18 = 0; num18 < 256; num18++) {
  colorLookup[num11] = array5[num18];
  num11 += 1;
}
rockPosition = num11;
for (var num19 = 0; num19 < 256; num19++) {
  colorLookup[num11] = array6[num19];
  num11 += 1;
}
hellPosition = num11;
colorLookup[num11] = color7;
snowTypes = new Array(6);
snowTypes[0] = tileLookup[147];
snowTypes[1] = tileLookup[161];
snowTypes[2] = tileLookup[162];
snowTypes[3] = tileLookup[163];
snowTypes[4] = tileLookup[164];
snowTypes[5] = tileLookup[200];
