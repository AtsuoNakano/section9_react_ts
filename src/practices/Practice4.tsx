export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractoce = () => calcTotalFee(1000);

  return (
    <div>
      <p>設定ファイルを触ってみる</p>
      <button onClick={onClickPractoce}>練習問題４を実行</button>
    </div>
  );
};
