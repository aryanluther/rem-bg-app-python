
      body {
        height: 100vh;
        display: flex;

        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .drop-zone {
        border: 2px dashed #ccc;
        padding: 20px;
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .drop-zone.dragover {
        background-color: #f0f0f0;
      }