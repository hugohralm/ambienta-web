export enum EnumStatusDenuncia {
  AGUARDANDO_ANALISE = 'Aguardando análise',
  EM_APURACAO = 'Em apuração',
  CONCLUIDA = 'Concluída',
  DESQUALIFICADA = 'Desqualificada'
}

export const ENUM_STATUS_DENUNCIA_VALUES: any[] = Object.keys(EnumStatusDenuncia);
