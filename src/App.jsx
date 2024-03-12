/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useState } from 'react';
import './App.scss';

import classNames from 'classnames';
import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

function getUserByOwnerId(ownerId) {
  return usersFromServer.find(user => user.id === ownerId);
}

function getCategoryByCategoryId(categoryId) {
  return categoriesFromServer.find(category => category.id === categoryId);
}

const products = productsFromServer.map((product) => {
  const category = getCategoryByCategoryId(product.categoryId);

  if (!category) {
    return null;
  }

  const user = getUserByOwnerId(category.ownerId);

  if (!user) {
    return null;
  }

  return {
    ...product,
    category,
    user,
  };
});

function getPreparedProduct(query, name) {
  let preparedProduct = [...products];

  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preparedProduct = preparedProduct.filter(product => product.name
      .toLowerCase().includes(normalizedQuery),
    );
  }

  if (name !== 'all') {
    preparedProduct = preparedProduct.filter(
      product => product.user.name === name,
    );
  }

  return preparedProduct;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('all');

  const visibleProduct = getPreparedProduct(query, name);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                className={classNames({ 'is-active': name === 'all' })}
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setName('all')}
              >
                All
              </a>

              <a data-cy="FilterUser" href="#/" onClick={() => setName('Roma')}>
                Roma
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                className={classNames({ 'is-active': name === 'Anna' })}
                onClick={() => setName('Anna')}
              >
                Anna
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                onClick={() => setName('Max')}
                className={classNames({ 'is-active': name === 'Max' })}
              >
                Max
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                onClick={() => setName('John')}
                className={classNames({ 'is-active': name === 'John' })}
              >
                John
              </a>
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  onChange={(event) => setQuery(event.target.value)}
                  value={query}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  {query && (
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setQuery('')}
                    />
                  )}
                </span>
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
              >
                All
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 1
              </a>

              <a data-cy="Category" className="button mr-2 my-1" href="#/">
                Category 2
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 3
              </a>
              <a data-cy="Category" className="button mr-2 my-1" href="#/">
                Category 4
              </a>
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>
        {name && (
          <div className="box table-container">
            {visibleProduct.length > 0 ? (
              <table
                data-cy="ProductTable"
                className="table is-striped is-narrow is-fullwidth"
              >
                <thead>
                  <tr>
                    <th>
                      <span className="is-flex is-flex-wrap-nowrap">
                        ID
                        <a href="#/">
                          <span className="icon">
                            <i data-cy="SortIcon" className="fas fa-sort" />
                          </span>
                        </a>
                      </span>
                    </th>

                    <th>
                      <span className="is-flex is-flex-wrap-nowrap">
                        Product
                        <a href="#/">
                          <span className="icon">
                            <i
                              data-cy="SortIcon"
                              className="fas fa-sort-down"
                            />
                          </span>
                        </a>
                      </span>
                    </th>

                    <th>
                      <span className="is-flex is-flex-wrap-nowrap">
                        Category
                        <a href="#/">
                          <span className="icon">
                            <i data-cy="SortIcon" className="fas fa-sort-up" />
                          </span>
                        </a>
                      </span>
                    </th>

                    <th>
                      <span className="is-flex is-flex-wrap-nowrap">
                        User
                        <a href="#/">
                          <span className="icon">
                            <i data-cy="SortIcon" className="fas fa-sort" />
                          </span>
                        </a>
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {visibleProduct.map((product) => {
                    const isFemale = product.user.sex === 'f';

                    return (
                      <tr data-cy="Product" key={product.id}>
                        <td
                          className="has-text-weight-bold"
                          data-cy="ProductId"
                        >
                          {product.id}
                        </td>

                        <td data-cy="ProductName">{product.name}</td>
                        <td data-cy="ProductCategory">
                          {product.category.icon}
                          -
                          {product.category.title}
                        </td>

                        <td
                          data-cy="ProductUser"
                          className={classNames('has-text-link', {
                            'has-text-danger': isFemale,
                          })}
                        >
                          {product.user.name}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p data-cy="NoMatchingMessage">
                No products matching selected criteria
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
