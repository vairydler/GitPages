/**
 * JavaScriptの関数からWeb Workerを生成し、
 * 終了処理（terminateとBlob URL解放）をカプセル化したオブジェクトを返します。
 *
 * @param {Function} workerFunc Workerとして実行したい関数。
 * @returns {{worker: Worker, terminate: Function}}
 * 生成されたWorkerインスタンスと、その終了処理を行うterminate関数を持つオブジェクト。
 */
const createWorkerFromFunction=
function(workerFunc) {
    const workerCode = `(${workerFunc.toString()})()`;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerURL = URL.createObjectURL(blob);
    
    let worker = new Worker(workerURL);
    let urlRevoked = false;

    // Blob URLを解放する内部関数
    const revokeBlobUrl = () => {
        if (!urlRevoked) {
            URL.revokeObjectURL(workerURL);
            urlRevoked = true;
            console.log(`Blob URL解放済み: ${workerURL}`); // デバッグ用
        }
    };

    // Workerからの最初のメッセージ受信時に解放（念のため）
    worker.addEventListener('message', revokeBlobUrl, { once: true });
    
    // エラー発生時にも解放
    worker.addEventListener('error', revokeBlobUrl, { once: true });

    // ユーザーに提供するterminateメソッド
    const customTerminate = () => {
        if (worker) { // workerがまだ存在する場合のみ実行
            worker.terminate(); // Workerを終了させる
            revokeBlobUrl();    // Blob URLを解放
            worker = null;      // 参照をクリア
            console.log("Workerと関連リソースがカスタムterminateにより完全に終了しました。");
        }
    };

    return {
        worker: worker,
        terminate: customTerminate // カスタムterminate関数を返す
    };
};
