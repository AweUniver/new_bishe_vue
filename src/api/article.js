import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/vue-event/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle (id) {
  return request({
    url: '/vue-event/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv (pv) {
  return request({
    url: '/vue-event/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle (data) {
  return request({
    url: '/vue-event/article/create',
    method: 'post',
    data
  })
}

export function updateArticle (data) {
  return request({
    url: '/vue-event/article/update',
    method: 'post',
    data
  })
}
