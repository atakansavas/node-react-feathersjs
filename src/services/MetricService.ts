import Metric from '../models/Metric.model';

export class MetricService {

    static GetMetric(errorId: string): Metric {
        return {
            errorId: errorId,
            apiId: 1,
            createDate: "123",
            _id: "asdf"
        }
    }

}
