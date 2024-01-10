import cell from '../models/cell.model.js';

export async function updateListCell(req, res) {
  try {
    const listCell = JSON.parse(req.body.cell);
    for (const cellTower of listCell) {
      const existed = await cell.findOne({ cellId: cellTower.cellId });
      if (!existed) {
        await cell.create({
          lat: cellTower.lat,
          cellId: cellTower.cellId,
          address: cellTower.address,
          lon: Number(cellTower.lon),
          lac: cellTower.lac,
          mcc: cellTower.mcc,
          mnc: cellTower.mnc,
        });
      } else {
        await cell.findOneAndUpdate(
          { cellId: cellTower.cellId },
          {
            lat: cellTower.lat,
            cellId: cellTower.cellId,
            address: cellTower.address,
            lon: Number(cellTower.lon),
            lac: cellTower.lac,
            mcc: cellTower.mcc,
            mnc: cellTower.mnc,
          }
        );
      }
    }

    res.status(200).send({
      result: 'success',
      message: 'ok',
    });
  } catch (error) {
    res.status(400).send({ result: 'failed', message: error.message });
  }
}
