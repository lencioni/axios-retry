import * as axios from 'axios'

export interface IAxiosRetryConfig {
  /**
   * The number of times to retry before failing
   * default: 3
   * 
   * @type {number}
   */
  retries?: number,
  /**
   * A callback to further control if a request should be retried. By default, it retries if the result did not have a response.
   * default: error => !error.response
   * 
   * @type {Function}
   */
  retryCondition?: (error: axios.AxiosError) => boolean,
  /**
   * A callback to further control the delay between retry requests. By default there is no delay.
   *
   * @type {Function}
   */
  retryDelay?: (retryCount: number, error: axios.AxiosError) => number
}

export interface IAxiosRetry {
  (
    axios: axios.AxiosStatic,
    axiosRetryConfig?: IAxiosRetryConfig
  )
}

declare const axiosRetry: IAxiosRetry

export default axiosRetry
