import React from 'react'
import './CatalogueBrowse.css'

export const CatalogueBrowse = () => {
  return (
    <div className="catalogue">
      <div className="catalogue-main">
        <div className="category">
          <h3 className="category-title">Action &amp; Adventure</h3>
          <div className="container">
            <div className="handle handle-left">
              <div className="handle-symbol">‹</div>
            </div>
            <div className="slider">
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" alt="tvshow" /> <span>"Loading..."</span>
                  <div className="poster-card-info">
                    <div className="pc-icons">
                      <div className="pc-icons-menu">
                        <div className="pc-icon-play">
                          <img className="pc-icon-play-img" alt="play" src="/assets/iconPlay-573ce638.png" />
                        </div>
                        <div className="pc-icon-default">
                          <img className="pc-icon-default-img white" alt="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAmVJREFUeJzt3D1uFFEQReG7BNgMCHYBJsKwDpIJbugNAYFTr4ffDAfwSrYlZGz3GLu7evqeTyppNNHTe0eaiUoCAAAAAAAAAAAAAAAAAOCgvRzzeczPMT8uP79oPREW82bM+Zjf16a+e914Lizg6Zhv+vfxr+bLmCdtp8Ps3uv2x7+a47bTYXY7TQewazsdZmdNB+Cms2EBFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswhgEbWNqxYyfVjZnGo6gNMVnPP6vLu804NQe/juWsXG/N98HXN0j3doURs4b1rCyDzO/BrzfO/XaFArV7svaevzce/XaFB7d7svaOvzfe/XaEAA4QHwEzD/rPonoFau1x+V7kva6qz+T2Cpleu1dbv7srY2daev7vEOrWrlem3d9piTFc2Zpi/6bAXn/HvqDt+KNfaPwpoOwE1nwwIsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUC0naYD2LWdDrOrrdtTARy3nQ6zq5XrtXX7tsevVWxs49q4Wrl+0zLL+u5g9vDhYWrb5idd7DauqfWrz1pPBAAAAAAAAAAAAAAAAADAw/wB6orZ+acWFhQAAAAASUVORK5CYII=" />
                        </div>
                        <div className="pc-icon-default pc-thumb">
                          <img className="pc-icon-default-img" alt="add" src="/assets/iconThumbUp-ad099873.png" />
                        </div>
                      </div>
                      <div className="pc-icon-default pc-arrow">
                        <img className="pc-icon-default-img" alt="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDEtMjFUMjE6MDk6MjItMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTAxLTIxVDIxOjI0OjA2LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAxLTIxVDIxOjI0OjA2LTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjYzNkMDU0YS1kMzg0LTY5NDMtOWIwNC03MDg1OGQ4MDgxNjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZWNhYjBkNC1kYjZlLWVjNGItODA4My0wYmU5ZWU0NjA2OTUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNzFiMjBhYy1lZDhlLWJiNDgtOWUyZi1hNDUwYjAwZWQ3MjciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3MWIyMGFjLWVkOGUtYmI0OC05ZTJmLWE0NTBiMDBlZDcyNyIgc3RFdnQ6d2hlbj0iMjAyMy0wMS0yMVQyMTowOToyMi0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYzNkMDU0YS1kMzg0LTY5NDMtOWIwNC03MDg1OGQ4MDgxNjciIHN0RXZ0OndoZW49IjIwMjMtMDEtMjFUMjE6MjQ6MDYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1w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" />
                      </div>
                    </div>
                    <div className="pc-seasons">
                      <div className="pc-seasons-match">99% Match </div>
                      <div className="pc-seasons-clasif">13 +</div>
                      <div className="pc-seasons-episodes">11 Seasons</div>
                      <div className="pc-seasons-quality">HD</div>
                    </div>
                    <div className="pc-genres">
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Action &amp; Adventure</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Drama</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Sci-Fi &amp; Fantasy</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg" alt="tvshow" />
                  <div className="poster-card-info">
                    <div className="pc-icons">
                      <div className="pc-icons-menu">
                        <div className="pc-icon-play">
                          <img className="pc-icon-play-img" alt="play" src="/assets/iconPlay-573ce638.png" />
                        </div>
                        <div className="pc-icon-default">
                          <img className="pc-icon-default-img white" alt="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAmVJREFUeJzt3D1uFFEQReG7BNgMCHYBJsKwDpIJbugNAYFTr4ffDAfwSrYlZGz3GLu7evqeTyppNNHTe0eaiUoCAAAAAAAAAAAAAAAAAOCgvRzzeczPMT8uP79oPREW82bM+Zjf16a+e914Lizg6Zhv+vfxr+bLmCdtp8Ps3uv2x7+a47bTYXY7TQewazsdZmdNB+Cms2EBFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswggmkUA0SwCiGYRQDSLAKJZBBDNIoBoFgFEswhgEbWNqxYyfVjZnGo6gNMVnPP6vLu804NQe/juWsXG/N98HXN0j3doURs4b1rCyDzO/BrzfO/XaFArV7svaevzce/XaFB7d7svaOvzfe/XaEAA4QHwEzD/rPonoFau1x+V7kva6qz+T2Cpleu1dbv7srY2daev7vEOrWrlem3d9piTFc2Zpi/6bAXn/HvqDt+KNfaPwpoOwE1nwwIsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUA0iwCiWQQQzSKAaBYBRLMIIJpFANEsAohmEUC0naYD2LWdDrOrrdtTARy3nQ6zq5XrtXX7tsevVWxs49q4Wrl+0zLL+u5g9vDhYWrb5idd7DauqfWrz1pPBAAAAAAAAAAAAAAAAADAw/wB6orZ+acWFhQAAAAASUVORK5CYII=" />
                        </div>
                        <div className="pc-icon-default pc-thumb">
                          <img className="pc-icon-default-img" alt="add" src="/assets/iconThumbUp-ad099873.png" />
                        </div>
                      </div>
                      <div className="pc-icon-default pc-arrow">
                        <img className="pc-icon-default-img" alt="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDEtMjFUMjE6MDk6MjItMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTAxLTIxVDIxOjI0OjA2LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAxLTIxVDIxOjI0OjA2LTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjYzNkMDU0YS1kMzg0LTY5NDMtOWIwNC03MDg1OGQ4MDgxNjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZWNhYjBkNC1kYjZlLWVjNGItODA4My0wYmU5ZWU0NjA2OTUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNzFiMjBhYy1lZDhlLWJiNDgtOWUyZi1hNDUwYjAwZWQ3MjciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3MWIyMGFjLWVkOGUtYmI0OC05ZTJmLWE0NTBiMDBlZDcyNyIgc3RFdnQ6d2hlbj0iMjAyMy0wMS0yMVQyMTowOToyMi0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYzNkMDU0YS1kMzg0LTY5NDMtOWIwNC03MDg1OGQ4MDgxNjciIHN0RXZ0OndoZW49IjIwMjMtMDEtMjFUMjE6MjQ6MDYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1w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" />
                      </div>
                    </div>
                    <div className="pc-seasons">
                      <div className="pc-seasons-match">99% Match </div>
                      <div className="pc-seasons-clasif">13 +</div>
                      <div className="pc-seasons-episodes">11 Seasons</div>
                      <div className="pc-seasons-quality">HD</div>
                    </div>
                    <div className="pc-genres">
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Action &amp; Adventure</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Drama</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                      <div className="pc-genres-single">
                        <div className="pc-genres-name">Sci-Fi &amp; Fantasy</div>
                        <div className="pc-genre-divider"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//7WUHnWGx5OO145IRxPDUkQSh4C7.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//7WUHnWGx5OO145IRxPDUkQSh4C7.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//2exOHePjOTquUsbThPGhuEjYTyA.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//2exOHePjOTquUsbThPGhuEjYTyA.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//1X4h40fcB4WWUmIBK0auT4zRBAV.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//1X4h40fcB4WWUmIBK0auT4zRBAV.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//wEo5pzSZ3MF4EzNvY2R1OZNX266.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//wEo5pzSZ3MF4EzNvY2R1OZNX266.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//mYLOqiStMxDK3fYZFirgrMt8z5d.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//mYLOqiStMxDK3fYZFirgrMt8z5d.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//nJUHX3XL1jMkk8honUZnUmudFb9.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//nJUHX3XL1jMkk8honUZnUmudFb9.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//7Bttz4hEspKlpU0Me57dkHNR3nf.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//7Bttz4hEspKlpU0Me57dkHNR3nf.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//4AyYGYGbHXDcsJaXK9rrSUpCYPe.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//4AyYGYGbHXDcsJaXK9rrSUpCYPe.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//euYz4adiSHH0GE3YnTeh3uLfBvL.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//euYz4adiSHH0GE3YnTeh3uLfBvL.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//pUhJGETy2sec4vEkiqJ9eGeIywc.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//pUhJGETy2sec4vEkiqJ9eGeIywc.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//8eJf0hxgIhE6QSxbtuNCekTddy1.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//8eJf0hxgIhE6QSxbtuNCekTddy1.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//stTEycfG9928HYGEISBFaG1ngjM.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//stTEycfG9928HYGEISBFaG1ngjM.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//zqjSex7DZn7p4dU7mMktdJ8zQV5.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//zqjSex7DZn7p4dU7mMktdJ8zQV5.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//m7tG5E1EbywuwTsl6hq990So0Bx.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//m7tG5E1EbywuwTsl6hq990So0Bx.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//sz4zF5z9zyFh8Z6g5IQPNq91cI7.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//sz4zF5z9zyFh8Z6g5IQPNq91cI7.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//zyshFjmlDXSzfns2Qk81cfIFfPP.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//zyshFjmlDXSzfns2Qk81cfIFfPP.jpg" alt="tvshow" />
              </div>
            </div>
            <div className="handle handle-right">
              <div className="handle-symbol">›</div>
            </div>
          </div>
        </div>
        <div className="category">
          <h3 className="category-title">Documentals</h3>
          <div className="container">
            <div className="handle handle-left">
              <div className="handle-symbol">‹</div>
            </div>
            <div className="slider">
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//hBB4fezbppL4Xm3hJQPtg7KTUei.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//hBB4fezbppL4Xm3hJQPtg7KTUei.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//2uuVIAb4MtPmMNTpOyID5V8DzrU.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//2uuVIAb4MtPmMNTpOyID5V8DzrU.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//h3WOQ5IxMaIIjiNO7Kb7em9ndRc.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//h3WOQ5IxMaIIjiNO7Kb7em9ndRc.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//giUBXYnDAaJgNqA6iE3BMVE2EHp.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//giUBXYnDAaJgNqA6iE3BMVE2EHp.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6stEKYqgLBhSieTRnnZ5ShE5ZPS.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6stEKYqgLBhSieTRnnZ5ShE5ZPS.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//9MxhqYvwx8FSb5cRWUWEDfpWSfo.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//9MxhqYvwx8FSb5cRWUWEDfpWSfo.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//mniuxYgwoNJpmOI2eXpm4hYK7wi.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//mniuxYgwoNJpmOI2eXpm4hYK7wi.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//aqM6QnuhSXzjHlKbXyKUqxaGiWu.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//aqM6QnuhSXzjHlKbXyKUqxaGiWu.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//yMdFsHKp4YX2CUkAQcZswxXDuoe.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//yMdFsHKp4YX2CUkAQcZswxXDuoe.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6X2hftdC8y78SKMSgfzeUItqaVq.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6X2hftdC8y78SKMSgfzeUItqaVq.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//beBB1ZnPOxG64dlTYKsEO8BwEGf.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//beBB1ZnPOxG64dlTYKsEO8BwEGf.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//gtkxUUmHDF31iDUOlxQqUXmiU71.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//gtkxUUmHDF31iDUOlxQqUXmiU71.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//dwYzpyRwf2rytD3PSLProDMLJ1c.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//dwYzpyRwf2rytD3PSLProDMLJ1c.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//8efvPqH6rdYhng60T7pLGaNs7Jx.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//8efvPqH6rdYhng60T7pLGaNs7Jx.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//uRMi6q4mazNTZ2HKdiY6RP5noDW.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//uRMi6q4mazNTZ2HKdiY6RP5noDW.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//3YUXRrNNHzBIFOiFB8hpyxVlzzs.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//3YUXRrNNHzBIFOiFB8hpyxVlzzs.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//v2BHRwtQVkt5fssLdo5MpFgHJPY.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//v2BHRwtQVkt5fssLdo5MpFgHJPY.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//8L0e4ecjsLZirpAuTfMjFf6CufP.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//8L0e4ecjsLZirpAuTfMjFf6CufP.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//g0CcpIzTA3nWETpLiatdnTcU2Qn.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//g0CcpIzTA3nWETpLiatdnTcU2Qn.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//fPpDR6kw8bA0iZ8a0dUbexVVzn3.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//fPpDR6kw8bA0iZ8a0dUbexVVzn3.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//q5jxpBFJvwMeqMI7Rg5cqZPdE7V.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//q5jxpBFJvwMeqMI7Rg5cqZPdE7V.jpg" alt="tvshow" />
              </div>
            </div>
            <div className="handle handle-right">
              <div className="handle-symbol">›</div>
            </div>
          </div>
        </div>
        <div className="category">
          <h3 className="category-title">War &amp; Politics</h3>
          <div className="container">
            <div className="handle handle-left">
              <div className="handle-symbol">‹</div>
            </div>
            <div className="slider">
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//8eJf0hxgIhE6QSxbtuNCekTddy1.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//8eJf0hxgIhE6QSxbtuNCekTddy1.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6iSnec83UEMgLOXAtGYwaVNHLjR.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6iSnec83UEMgLOXAtGYwaVNHLjR.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//bfxwMdQyJc0CL24m5VjtWAN30mt.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//bfxwMdQyJc0CL24m5VjtWAN30mt.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6GAvS2e6VIRsms9FpVt33PsCoEW.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6GAvS2e6VIRsms9FpVt33PsCoEW.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//z8yXhmNmc54TsMK2Ig4V4SHdkOX.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//z8yXhmNmc54TsMK2Ig4V4SHdkOX.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//oMmqtafm6Rdlka1ejJeC9BDWzyO.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//oMmqtafm6Rdlka1ejJeC9BDWzyO.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//5R125JAIh1N38pzHp2dRsBpOVNY.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//5R125JAIh1N38pzHp2dRsBpOVNY.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6rhuM3oMoEWKxAdrm7IyM8oq8cC.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6rhuM3oMoEWKxAdrm7IyM8oq8cC.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//eLdcio9HBKzsdIJGeD80oObDfkr.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//eLdcio9HBKzsdIJGeD80oObDfkr.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//11Hs7WmsW2htHTKQrx3nK9Ke8aG.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//11Hs7WmsW2htHTKQrx3nK9Ke8aG.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//vFtsI6Nk3cy2l4LGoh1aFRZKaQ7.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//vFtsI6Nk3cy2l4LGoh1aFRZKaQ7.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//6Nl1ablo4DNTLb4ZH7Mycz81AEt.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//6Nl1ablo4DNTLb4ZH7Mycz81AEt.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//doqvfJojBwtprn3qPxb4ndO3lom.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//doqvfJojBwtprn3qPxb4ndO3lom.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//14xKxbF3Si8m5u0m5yPj9ZGlEkj.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//14xKxbF3Si8m5u0m5yPj9ZGlEkj.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//x9Y1IMFdY8Ma222KcQadFEau0EB.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//x9Y1IMFdY8Ma222KcQadFEau0EB.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//2FQKBkUvvWhfjpXr5THFLEW3E7e.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//2FQKBkUvvWhfjpXr5THFLEW3E7e.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//mZKGzq3nblFMmsQ45muvN3MhrJL.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//mZKGzq3nblFMmsQ45muvN3MhrJL.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//IlthpFjx62INuCZAuTi8yo9A7R.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//IlthpFjx62INuCZAuTi8yo9A7R.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//ptQaNLJUTUrEFdpE5pAH2PtSzvl.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//ptQaNLJUTUrEFdpE5pAH2PtSzvl.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//udojgSVlepgbA1AKbFvy2tTjv0w.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//udojgSVlepgbA1AKbFvy2tTjv0w.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//m42lb4UxkpaFil4bw0bqqjlWCY4.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//m42lb4UxkpaFil4bw0bqqjlWCY4.jpg" alt="tvshow" />
              </div>
            </div>
            <div className="handle handle-right">
              <div className="handle-symbol">›</div>
            </div>
          </div>
        </div>
        <div className="category">
          <h3 className="category-title">Family friendly</h3>
          <div className="container">
            <div className="handle handle-left">
              <div className="handle-symbol">‹</div>
            </div>
            <div className="slider">
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//zI3E2a3WYma5w8emI35mgq5Iurx.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//zI3E2a3WYma5w8emI35mgq5Iurx.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//ckLLIsNy3Z0Go1PYHA2PHzVymUA.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//ckLLIsNy3Z0Go1PYHA2PHzVymUA.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//zqjSex7DZn7p4dU7mMktdJ8zQV5.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//zqjSex7DZn7p4dU7mMktdJ8zQV5.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//VYnnyA2hyxi3VUPgCA71mMtt69.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//VYnnyA2hyxi3VUPgCA71mMtt69.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//tkaduqdhFrF1vp8L55OJfB5jw8Z.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//tkaduqdhFrF1vp8L55OJfB5jw8Z.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//y0r27LkhX6AZNqo2Q5FUYmwi5wz.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//y0r27LkhX6AZNqo2Q5FUYmwi5wz.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//30P6ifagQ3fguTsI33KMmDLTAx6.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//30P6ifagQ3fguTsI33KMmDLTAx6.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//ohfKOxy4028jm2XQL7Wy6cVMKhm.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//ohfKOxy4028jm2XQL7Wy6cVMKhm.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//laEZvTqM80UaplUaDSCCbWhlyEV.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//laEZvTqM80UaplUaDSCCbWhlyEV.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//gHtEhlAZHxMawOiPq7JoKwkmETQ.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//gHtEhlAZHxMawOiPq7JoKwkmETQ.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//cezQyM5cO454vUdLiLOkv78K64D.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//cezQyM5cO454vUdLiLOkv78K64D.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//udaLIJ6Na7GOHjvTlyP9JFPTccv.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//udaLIJ6Na7GOHjvTlyP9JFPTccv.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//gxdTn5UwvriN1EzDSNnWr5AAQN7.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//gxdTn5UwvriN1EzDSNnWr5AAQN7.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//lMqruIEov5PSA7eu8mF0I4IiKda.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//lMqruIEov5PSA7eu8mF0I4IiKda.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//fqb9X4th2p2voefRLqdv1xoZQmC.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//fqb9X4th2p2voefRLqdv1xoZQmC.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//f4QCYoBcJib8BprM4DUIQBMckeQ.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//f4QCYoBcJib8BprM4DUIQBMckeQ.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//kP8Z51s9D8tiGnoRbL88db0e2jv.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//kP8Z51s9D8tiGnoRbL88db0e2jv.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//uc2gtWczT58BiAUJWFz9P5aZmNF.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//uc2gtWczT58BiAUJWFz9P5aZmNF.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//3xWzlLZ0kAD6SkVZTekFM9lxZyP.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//3xWzlLZ0kAD6SkVZTekFM9lxZyP.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//3aQipkhSCHUmaHjImqEqT80k6GP.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//3aQipkhSCHUmaHjImqEqT80k6GP.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//joDbBLtNlj8auqtQ3QFGMzHAq3w.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//joDbBLtNlj8auqtQ3QFGMzHAq3w.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//rrOItUbzFYzsl2Wl4XJjSeubb97.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//rrOItUbzFYzsl2Wl4XJjSeubb97.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//9QwbXpSZGbgLgvZOelvGampEhMv.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//9QwbXpSZGbgLgvZOelvGampEhMv.jpg" alt="tvshow" />
              </div>
              <div className="poster-container">
                <div className="poster-card activeRight">
                  <img className="poster-card-img" src="https://image.tmdb.org/t/p/original//jwodl4IPNPybAIhM9ATFxiwJKMd.jpg" alt="tvshow" /> <span>"Loading..."</span>
                </div>
                <img className="poster-img" src="https://image.tmdb.org/t/p/original//jwodl4IPNPybAIhM9ATFxiwJKMd.jpg" alt="tvshow" />
              </div>
            </div>
            <div className="handle handle-right">
              <div className="handle-symbol">›</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
