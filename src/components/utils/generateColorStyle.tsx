// Tipo para objeto de estilos  da função geradora de estilos
type ColorStyle = {
    background: string;
    color: string;
    border?: string;
  };
  
  /* 
    Função que gera cores de Background, Border e cor de
    fonte a fim de reduzir repetições de codigo
  
    Seguir o padrão de parâmetros: 
    1- Cor do background;
    2- Cor da fonte do botão;
    3- (Opicional) Cor da borda;
  */
 export function generateColorStyle(
    bgColor: string,
    fontColor: string,
    borderColor: string
  ) {
    let styles: ColorStyle = {
      background: bgColor,
      color: fontColor,
    };
  
    borderColor && (styles.border = `1px solid ${borderColor}`);
  
    return styles;
  }